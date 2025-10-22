import { useState, useEffect, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from 'expo-sqlite';
import { Checkbox } from 'expo-checkbox';
import { Image } from 'expo-image';
/**
 * The Item type represents a single item in database.
 */
interface ItemEntity {
  id: number;
  done: boolean;
  value: string; 
}

//#region Components

export default function App() {
  return (
    <SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
      <Main />
    </SQLiteProvider>
  );
}

function Main() {
  const db = useSQLiteContext();
  const [text, setText] = useState('');
  const [todoItems, setTodoItems] = useState<ItemEntity[]>([]);
  const [doneItems, setDoneItems] = useState<ItemEntity[]>([]);

  const refetchItems = useCallback(() => {
    async function refetch() {
      await db.withExclusiveTransactionAsync(async () => {
        setTodoItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            false
          )
        );
        setDoneItems(
          await db.getAllAsync<ItemEntity>(
            'SELECT * FROM items WHERE done = ?',
            true
          )
        );
      });
    }
    refetch();
  }, [db]);

  useEffect(() => {
    refetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.infor}>
        <Image source={require('../assets/images/back.png')}
        style={{height: 20, width: 20}}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/images/avatar.png')}
        style={{height: 50, width: 50, borderRadius: 50}}/>
          <View>
          <Text style={{marginLeft: 12, fontWeight: 'bold', color: '#171A1F '}}>Hi Twinkle</Text>
          <Text style={{marginLeft: 2, fontWeight: 'bold', color: '#171A1F'}}>Have agrate day a head</Text>
        </View>
      </View>

      </View>

      <View style={styles.flexRow}>
        <TextInput
          onChangeText={(text) => setText(text)}
          onSubmitEditing={async () => {
            await addItemAsync(db, text);
            await refetchItems();
            setText('');
          }}
          placeholder="Search"
          style={styles.input}
          value={text}
        />
      </View>

      <ScrollView style={styles.listArea}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Todo</Text>
          {todoItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onPressItem={async (id) => {
                await updateItemAsDoneAsync(db, id);
                await refetchItems();
              }}
            />
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeading}>Completed</Text>
          {doneItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onPressItem={async (id) => {
                await deleteItemAsync(db, id);
                await refetchItems();
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function Item({
  item,
  onPressItem,
}: {
  item: ItemEntity;
  onPressItem: (id) => void | Promise<void>;
}) {
  const { id, done, value } = item;
  const [isChecked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(true)
    onPressItem(id)
  }
  return (
    <TouchableOpacity
      onPress={() => onPressItem && onPressItem(id)}
      style={[styles.item, done && styles.itemDone]}
    >
      <Checkbox
          style={styles.checkbox}
          value={done}
          onValueChange={handleCheckbox}
          color={done ? '#14923E' : undefined}

        />
      <Text style={[styles.itemText, done && styles.itemTextDone]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
}

//#endregion

//#region Database Operations

async function addItemAsync(db: SQLiteDatabase, text: string): Promise<void> {
  if (text !== '') {
    await db.runAsync(
      'INSERT INTO items (done, value) VALUES (?, ?);',
      false,
      text
    );
  }
}

async function updateItemAsDoneAsync(
  db: SQLiteDatabase,
  id: number
): Promise<void> {
  await db.runAsync('UPDATE items SET done = ? WHERE id = ?;', true, id);
}

async function deleteItemAsync(db: SQLiteDatabase, id: number): Promise<void> {
  await db.runAsync('DELETE FROM items WHERE id = ?;', id);
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{
    user_version: number;
  }>('PRAGMA user_version');
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT);
`);
    currentDbVersion = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

//#endregion

//#region Styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 64,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  input: {
    borderColor: '#9095A0',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  item: {
    backgroundColor: '#171A1F26',
    padding: 8,
    margin: 4,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDone: {
    backgroundColor: '#1c9963',
  },
  itemText: {
    color: '#000',
  },
  itemTextDone: {
    color: '#fff',
  },
  checkbox: {
    margin: 10,
  },
  infor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

//#endregion
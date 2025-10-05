import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";

const CATEGORIES = ["All", "Roadbike", "Mountain"];

const BIKES = [
  {
    id: "1",
    name: "Pinarello",
    price: 1800,
    image: require("../assets/images/bifour_-removebg-preview.png"),
  },
  {
    id: "2",
    name: "Pina Mountain",
    price: 1700,
    image: require("../assets/images/bione-removebg-preview.png"),
  },
  {
    id: "3",
    name: "Pina Bike",
    price: 1500,
    image: require("../assets/images/bithree_removebg-preview.png"),
  },
  {
    id: "4",
    name: "Pinarello",
    price: 1900,
    image: require("../assets/images/bitwo-removebg-preview.png"),
  },
  {
    id: "5",
    name: "Pinarello",
    price: 2700,
    image: require("../assets/images/bitwo-removebg-preview.png"),
  },
  {
    id: "6",
    name: "Pinarello",
    price: 1350,
    image: require("../assets/images/bione-removebg-preview.png"),
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>
        The world’s <Text style={styles.headerHighlight}>Best Bike</Text>
      </Text>

      <View style={styles.categoryContainer}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={BIKES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.heart}>♡</Text>

            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>

            <Link
              href={{
                pathname: "/detail",
                params: { name: item.name, price: item.price },
              }}
              asChild
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </Link>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: "#fff",
  },


  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  headerHighlight: {
    color: "#E84F4F",
    fontWeight: "700",
  },

  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#E84F4F",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginHorizontal: 6,
  },
  categoryButtonActive: {
    backgroundColor: "#E84F4F",
  },
  categoryText: {
    color: "#E84F4F",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "600",
  },

  card: {
    width: "48%",
    backgroundColor: "#FEF6F6",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heart: {
    alignSelf: "flex-end",
    fontSize: 18,
    marginRight: 10,
    color: "#C4C4C4",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "#E84F4F",
    fontWeight: "700",
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#E84F4F",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});

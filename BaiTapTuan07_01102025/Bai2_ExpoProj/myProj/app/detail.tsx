import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function DetailScreen() {
  const { name, price } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/bifour_-removebg-preview.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.discount}>15% OFF | ${price}</Text>
            <Text style={styles.oldPrice}>449$</Text>
          </View>

          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.fixedBottom}>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.likeIcon}>♡</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  imageContainer: {
    backgroundColor: "#FFEDED",
    margin: 16,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 280,
    height: 180,
    resizeMode: "contain",
  },

  infoSection: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  discount: {
    color: "#8E8E8E",
    fontWeight: "600",
    fontSize: 15,
    marginRight: 10,
  },
  oldPrice: {
    color: "#000",
    fontSize: 16,
    textDecorationLine: "line-through",
    fontWeight: "600",
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  description: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },

  fixedBottom: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeButton: {
    borderWidth: 1,
    borderColor: "#E84F4F",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  likeIcon: {
    fontSize: 20,
    color: "#E84F4F",
  },
  cartButton: {
    flex: 1,
    backgroundColor: "#E84F4F",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginLeft: 20,
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

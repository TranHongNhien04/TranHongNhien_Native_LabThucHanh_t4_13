import React from "react";
import { useLocalSearchParams, Link } from "expo-router";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen() {
  const { name, price } = useLocalSearchParams();

  return (
    <>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 10 },
  price: { fontSize: 18, color: "#E84F4F", marginBottom: 20 },
  button: {
    backgroundColor: "#E84F4F",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});

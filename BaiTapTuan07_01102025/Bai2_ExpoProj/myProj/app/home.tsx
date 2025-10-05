// app/home.tsx
import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const BIKES = [
  { id: '1', name: 'Pinarello', price: 1800, image: require('../assets/images/bifour_-removebg-preview.png') },
  { id: '2', name: 'Pina Mountain', price: 1700, image: require('../assets/images/bione-removebg-preview.png') },
  { id: '3', name: 'Pina Bike', price: 1500, image: require('../assets/images/bithree_removebg-preview.png') },
  { id: '4', name: 'Pinarello', price: 1900, image: require('../assets/images/bitwo-removebg-preview.png') },
];


export default function HomeScreen() {
  return (
  <>
  </>
  );
}


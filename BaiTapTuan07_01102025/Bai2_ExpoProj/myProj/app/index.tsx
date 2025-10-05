import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.imageWrap}>
        <Image source={require('../assets/images/bifour_-removebg-preview.png')} style={styles.image} />
      </View>

      <Text style={styles.title}>POWER BIKE SHOP</Text>

      <Link href="/home" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  imageWrap: {
    backgroundColor: '#F7EDEE',
    padding: 24,
    borderRadius: 20,
    marginBottom: 18,
  },
  image: { width: 220, height: 220, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 18 },
  button: {
    backgroundColor: '#E84F4F',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: '#fff', fontWeight: '700' },
});

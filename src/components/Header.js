import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Self-Care Planner</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFC1E3', // Warna pink lembut
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5, // Bayangan untuk Android
    shadowColor: '#ff99cc', // Bayangan warna pink untuk iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  title: {
    color: '#FF69B4', // Warna pink cerah untuk teks
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(255, 105, 180, 0.6)', // Efek bayangan pink lembut
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  underline: {
    marginTop: 10,
    height: 4,
    width: '40%',
    backgroundColor: '#FFB6C1', // Pink pastel untuk garis bawah
    borderRadius: 2,
  },
  
});

export default Header;

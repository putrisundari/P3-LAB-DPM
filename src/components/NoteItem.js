import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ note }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFC1E3', // Warna pink lembut untuk latar belakang
    padding: 20,
    marginVertical: 8,
    borderRadius: 15, // Membuat sudut membulat
    borderWidth: 1, // Garis pinggir untuk estetika
    borderColor: '#FF69B4', // Warna pink cerah untuk border
    shadowColor: '#FF69B4', // Bayangan lembut berwarna pink
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4, // Efek bayangan untuk Android
  },
  text: {
    fontSize: 16,
    color: '#FF69B4', // Teks berwarna pink cerah
    fontWeight: '600',
    textAlign: 'center', // Teks diposisikan di tengah
    letterSpacing: 1.5, // Menambah jarak antar huruf
  },
 
});

export default NoteItem;

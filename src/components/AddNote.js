import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddNote = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="My Planners Today..."
        value={text}
        onChangeText={setText}
        placeholderTextColor="#FFB6C1" // Warna placeholder pink pastel
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFC1E3', // Border pink pastel
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#FF69B4', // Warna teks pink cerah
    backgroundColor: '#FFF0F5', // Latar belakang pink lembut
  },
  button: {
    backgroundColor: '#FF69B4', // Warna pink cerah
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10, // Sudut membulat untuk tombol
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF69B4', // Bayangan untuk tombol
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4, // Efek bayangan untuk Android
  },
  buttonText: {
    color: '#FFFFFF', // Warna teks putih
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  
});

export default AddNote;

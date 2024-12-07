import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import NoteItem from '../components/NoteItem';
import AddNote from '../components/AddNote';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);

  // Lifecycle log
  useEffect(() => {
    console.log('NotesScreen Mounted');
    return () => console.log('NotesScreen Unmounted');
  }, []);

  const addNote = (text) => {
    setNotes((prevNotes) => [text, ...prevNotes]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddNote onAdd={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteItem note={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  

});

export default NotesScreen;
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: '1', title: 'React Native Documentation', url: 'https://reactnative.dev/', imageUrl: 'https://reactnative.dev/img/header_logo.svg' },
    { id: '2', title: 'JavaScript Info', url: 'https://javascript.info/', imageUrl: 'https://javascript.info/images/JS-logo.png' },
    { id: '3', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', imageUrl: 'https://developer.mozilla.org/en-US/images/mdn-logo-sm.svg' },
    { id: '4', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', imageUrl: 'https://developer.mozilla.org/en-US/images/mdn-logo-sm.svg' },
    { id: '5', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', imageUrl: 'https://developer.mozilla.org/en-US/images/mdn-logo-sm.svg' },
  ]);

  const renderBookmarkItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.url}>{item.url}</Text>
      </View>
      <Icon name="bookmark" size={30} color="gold" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bookmarks</Text>
      <FlatList
        data={bookmarks}
        renderItem={renderBookmarkItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  url: {
    fontSize: 14,
    color: '#777',
  },
});

export { Bookmark };

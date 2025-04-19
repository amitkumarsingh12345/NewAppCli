import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Dummy data for properties
const properties = [
  {
    id: 1,
    name: 'AK INFRADREAM LTD',
    price: '200,000',
    image: 'pro.jpg',
  },
  {
    id: 2,
    name: 'AK INFRADREAM LTD',
    price: '200000',
    image: 'pro.jpg',
  },
  {
    id: 3,
    name: 'AK INFRADREAM LTD',
    price: '200000',
    image: 'pro.jpg',
  },
  {
    id: 4,
    name: 'AK INFRADREAM LTD',
    price: '200000',
    image: 'pro.jpg',
  },

];

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header with Title */}
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Find Your Dream Home</Text> */}
        <TextInput style={styles.searchBar} placeholder="Search for properties..." placeholderTextColor="#bbb" />
      </View>




      {/* Property Listings */}
      <ScrollView contentContainerStyle={styles.propertyList}>

        <Image
          source={require('../../assets/images/posters/aklogo.jpeg')}
          style={{ marginBottom: 20, width: '100%', aspectRatio: 30 / 9, resizeMode: 'contain' }}
        />

        {properties.map((property) => (
          <View key={property.id} style={styles.card}>
            <Image source={require(`../../assets/images/posters/pro.jpg`)} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.propertyName}>{property.name}</Text>
              <Text style={styles.propertyPrice}>Price | Rs. {property.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Styling for the UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2133', // Dark blue-gray background color
    padding: 15,
  },
  header: {
    backgroundColor: '#1A2133', // Dark blue-gray background for the header
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff', // White text for header
    marginBottom: 10,
  },
  searchBar: {
    height: 50,
    width: '110%',
    borderColor: '#bbb', // Light grey border
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    color: '#333', // Dark text color for search bar
    fontSize: 16,
    marginTop: 10,
  },
  propertyList: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff', // White background for cards
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 15,
  },
  propertyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black text for property name
    marginBottom: 5,
  },
  propertyPrice: {
    fontSize: 18,
    color: '#555', // Dark grey color for price
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1A2133', // Dark blue-gray button background
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { Home };

















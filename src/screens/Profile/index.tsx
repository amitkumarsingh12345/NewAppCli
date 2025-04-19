import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Optional: for icons

const Profile = () => {
  const [email, setEmail] = useState('');  // Email state (could be fetched from user data)
  const [password, setPassword] = useState(''); // Password state

  // Handle save changes button press
  const handleSaveChanges = () => {
    console.log("Updated with:", email, password);
    // In a real scenario, you would save the profile data here
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-background-image.jpg' }} // Optional: Background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.subHeader}>Update your profile information</Text>

        {/* Email Input (for editing) */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#B0B0B0"
        />

        {/* Password Input (for editing) */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#B0B0B0"
        />

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        {/* Social Media Login Section (for additional info, optional) */}
        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Or connect with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="facebook" size={30} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={30} color="#db4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="twitter" size={30} color="#1da1f2" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Out Link (additional functionality for profile screen) */}
        <TouchableOpacity style={styles.signOutLink}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight white background for readability
    padding: 20,
    borderRadius: 15,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 5,
  },
  signOutLink: {
    marginTop: 20,
  },
  signOutText: {
    fontSize: 14,
    color: '#FF6347', // Tomato color for the sign out link
    fontWeight: 'bold',
  },
});

export { Profile };

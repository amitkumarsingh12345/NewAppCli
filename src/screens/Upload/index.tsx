// import { Text, View } from "react-native"
// import Geolocation from "@react-native-community/geolocation"
// import { useState } from "react";

// const Upload = () => {
//   const [currLatitude, setCurrLatitude] = useState(null);
//   const [currLongitude, setCurrLongitude] = useState(null);

//   Geolocation.getCurrentPosition((data) => {
//     setCurrLatitude(data.coords.latitude);
//     setCurrLongitude(data.coords.longitude);
//   });

//   return (
//     <View>
//       <Text>Latitude : {currLatitude}</Text>
//       <Text>Longitude  : {currLongitude}</Text>
//     </View>
//   )
// }
// export { Upload }



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState('');

  // Handle Image Pick
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        quality: 1,
        presentationStyle: 'fullScreen',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets) {
          const { uri, fileName } = response.assets[0];
          setSelectedImage(uri);
          setFileName(fileName || 'Untitled Image');
        }
      }
    );
  };

  // Handle file upload logic
  const handleUpload = () => {
    if (!selectedImage) {
      Alert.alert('Error', 'Please select an image to upload');
    } else {
      Alert.alert('Success', 'Image uploaded successfully');
      // Handle file upload logic here (e.g., send to server)
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Upload Your Image</Text>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Select Image</Text>
      </TouchableOpacity>

      {/* Image Preview */}
      {selectedImage && (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
          <Text style={styles.imageName}>{fileName}</Text>
        </View>
      )}

      {/* Upload Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleUpload}>
        <Text style={styles.submitButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling for the Upload Page UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Black text for title
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#000', // Black button background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff', // White text for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagePreviewContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageName: {
    fontSize: 16,
    color: '#555', // Dark grey for the image name
  },
  submitButton: {
    backgroundColor: '#000', // Black button background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff', // White text for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { Upload };



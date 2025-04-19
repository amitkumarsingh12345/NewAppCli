// import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// import { COLORS } from '../../constants'; 
// import { StatusBar } from '../../components'; 

// const Search = () => {
//   return (
//     <View style={styles.container}>

//       {/* Search Section */}
//       <View style={styles.row}>
//         <View style={styles.col}>
//           <View style={styles.searchSection}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder='Search'
//               placeholderTextColor="#888"
//             />
//             <TouchableOpacity style={styles.searchIcon}>
//               <Text style={styles.searchIconText}>H</Text>
//             </TouchableOpacity>


//           </View>
//         </View>
//       </View>

//       {/* Category Section */}
//       <View style={styles.row}>
//         <View style={styles.col}>
//           <View style={styles.category}>
//             <TouchableOpacity style={styles.categoryButton}>
//               <Text style={styles.categoryItems}>Real Estate</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.categoryButton}>
//               <Text style={styles.categoryItems}>Apartment</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.categoryButton}>
//               <Text style={styles.categoryItems}>House</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.categoryButton}>
//               <Text style={styles.categoryItems}>Villa</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Items Section */}
//       <View style={styles.row}>
//         <View style={styles.col}>
//           <ScrollView style={styles.imageContainer}>


//             <View style={styles.card}>
//               <Image
//                 source={{ uri: 'https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=' }}
//                 style={styles.image}
//               />
//               <View style={styles.cardContent}>
//                 <Text style={styles.price}>$440</Text>
//                 <Text style={styles.address}>123, Main Tulsi Marg</Text>
//               </View>
//             </View>

//             <View style={styles.card}>
//               <Image
//                 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNq0_5dPgXF1H_HzuegQEohgEt_i6dP2KxTXTc3MTFiUhxtjoNm6WDLs&s' }}
//                 style={styles.image}
//               />
//               <View style={styles.cardContent}>
//                 <Text style={styles.price}>$340</Text>
//                 <Text style={styles.address}>123, Main Tulsi Marg</Text>
//               </View>
//             </View>

//             <View style={styles.card}>
//               <Image
//                 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2GCypHF3GtdhVf0WBYuU6O0q_DMzywJjbyLHSR0J8Tw1tlbvrMb0Ox0&s' }}
//                 style={styles.image}
//               />
//               <View style={styles.cardContent}>
//                 <Text style={styles.price}>$640</Text>
//                 <Text style={styles.address}>123, Main Tulsi Marg Prayagraj</Text>
//               </View>
//             </View>

//             <View style={styles.card}>
//               <Image
//                 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGNuZINGX9qadvaLc1juDdgJoLa2bjdLclAN_yhqBl_ggV84r48iIT38&s' }}
//                 style={styles.image}
//               />
//               <View style={styles.cardContent}>
//                 <Text style={styles.price}>$400</Text>
//                 <Text style={styles.address}>123, Main Tulsi Marg</Text>
//               </View>
//             </View>

//           </ScrollView>
//         </View>
//       </View>

//     </View>
//   );
// };

// export { Search };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     paddingTop: 60,
//     paddingHorizontal: 15,
//   },
//   row: {
//     marginBottom: 15,
//   },
//   col: {
//     marginTop: -15,
//   },
//   searchSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 40,
//     elevation: 5,
//     paddingHorizontal: 15,
//     height: 50,
//   },
//   searchInput: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: '#333',
//   },
//   searchIcon: {
//     height: 40,
//     width: 40,
//     backgroundColor: COLORS.primary, // Ensure this is defined in your COLORS file
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   searchIconText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   category: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 15,
//   },
//   categoryButton: {
//     backgroundColor: COLORS.primary,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 30,
//   },
//   categoryItems: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   imageContainer: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#2C2C2C',
//     borderRadius: 15,
//     overflow: 'hidden',
//     marginBottom: 15,
//     padding: 10,
//   },
//   image: {
//     width: '100%',
//     height: 220,
//     borderRadius: 10,
//   },
//   cardContent: {
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   price: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginBottom: 5,
//   },
//   address: {
//     color: 'gray',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });










import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Dummy data for search results (e.g., properties, products, etc.)
const data = [
  { id: '1', name: '206 Mount Olive Road Two', description: 'Price | Rs. 000000' },
  { id: '2', name: '206 Mount Olive Road Two', description: 'Price | Rs. 000000' },
  { id: '3', name: '206 Mount Olive Road Two', description: 'Price | Rs. 000000' },
  { id: '4', name: '206 Mount Olive Road Two', description: 'Price | Rs. 000000' },
  { id: '5', name: '206 Mount Olive Road Two', description: 'Price | Rs. 000000' },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(data);
    } else {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#bbb"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Search Results */}
      <ScrollView contentContainerStyle={styles.resultsContainer}>
        {filteredData.length === 0 ? (
          <Text style={styles.noResultsText}>No results found</Text>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.resultCard}>
                <Text style={styles.resultName}>{item.name}</Text>
                <Text style={styles.resultDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.resultButton}>
                  <Text style={styles.resultButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

// Styling for the UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    backgroundColor: '#333', // Dark background for search bar
    color: '#fff', // White text color
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 18,
  },
  resultsContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  noResultsText: {
    fontSize: 18,
    color: '#888', // Grey text when no results found
    textAlign: 'center',
    marginTop: 20,
  },
  resultCard: {
    backgroundColor: '#fff', // White background for each result card
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  resultName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black text for result name
  },
  resultDescription: {
    fontSize: 16,
    color: '#555', // Dark grey for description text
    marginVertical: 5,
  },
  resultButton: {
    backgroundColor: '#000', // Black button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  resultButtonText: {
    color: '#fff', // White text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { Search };

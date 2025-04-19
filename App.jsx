import { StyleSheet, Text, View } from 'react-native';
import { RootNavigation } from './src/navigation';
import { Fonts } from './src/constants';
import { StatusBar } from './src/components';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

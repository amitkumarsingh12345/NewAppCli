import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, Fonts } from '../../constants';

interface CategoryTabProps {
  tabsArray: string[];
}

const CategoryTab = ({ tabsArray }: CategoryTabProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {tabsArray.map(item => (
          <View key={item} style={styles.tabContainer}>
            <Text style={styles.tabTxt}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export { CategoryTab };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabContainer: {
    paddingHorizontal: 25,
    paddingVertical: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Primary,
  },
  tabTxt: {
    fontSize: 13,
    fontFamily: Fonts.Regular,
    color: COLORS.White,
  },
});

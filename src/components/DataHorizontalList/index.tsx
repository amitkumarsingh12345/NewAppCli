import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {PodcastItem} from '../../types';
import {COLORS, Fonts} from '../../constants';

interface DataHorizontalListProps {
  headerTitle: string;
  data: PodcastItem[];
}

const DataHorizontalList = ({headerTitle, data}: DataHorizontalListProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitleTxt}>{headerTitle}</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={item.poster} style={styles.itemImg} />
            <Text style={styles.itemTitleTxt}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export {DataHorizontalList};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 20,
    paddingHorizontal: 20,
  },
  headerTitleTxt: {
    fontSize: 18,
    color: COLORS.White,
    fontFamily: Fonts.Bold,
  },
  itemContainer: {
    width: 140,
    paddingHorizontal: 5,
    gap: 10,
  },
  itemImg: {
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
  },
  itemTitleTxt: {
    fontSize: 16,
    color: COLORS.White,
    fontFamily: Fonts.Regular,
  },
});

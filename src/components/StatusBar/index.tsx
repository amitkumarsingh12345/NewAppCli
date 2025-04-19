import {
  StyleSheet,
  View,
  StatusBar as AppStatusBar,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../constants';

const StatusBar = () => {
  return (
    <View style={[styles.statusBar]}>
      <SafeAreaView>
        <AppStatusBar
          translucent
          backgroundColor={COLORS.bgColor}
          barStyle={'light-content'}
        />
      </SafeAreaView>
    </View>
  );
};

export {StatusBar};

const STATUS_HEIGHT = AppStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUS_HEIGHT,
    backgroundColor: COLORS.bgColor,
  },
});

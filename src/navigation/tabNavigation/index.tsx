import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform} from 'react-native';

import {Bookmark, Home, Profile, Search, Upload} from '../../screens';
import {COLORS, ScreenNames} from '../../constants';
import {Icons} from '../../assets/images/icons';

const TabIcons = {
  [ScreenNames.Home]: Icons.home,
  [ScreenNames.Search]: Icons.search,
  [ScreenNames.Upload]: Icons.upload,
  [ScreenNames.Bookmark]: Icons.bookmark,
  [ScreenNames.Profile]: Icons.profile,
};

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.White,
        tabBarInactiveTintColor: COLORS.Secondary,
        tabBarStyle: {
          backgroundColor: COLORS.Primary,
          height: Platform.OS === 'android' ? 60 : 90,
          borderColor: COLORS.Primary,
          paddingBottom: Platform.OS === 'android' ? 0 : 30,
        },

        tabBarIcon: ({color}) => {
          const {name} = route;
          return (
            <Image
              source={TabIcons[name]}
              style={{width: 35, height: 35, tintColor: color}}
            />
          );
        },
      })}>
      <Tab.Screen name={ScreenNames.Home} component={Home} />
      <Tab.Screen name={ScreenNames.Search} component={Search} />
      <Tab.Screen name={ScreenNames.Upload} component={Upload} />
      <Tab.Screen name={ScreenNames.Bookmark} component={Bookmark} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

export {TabNavigation};

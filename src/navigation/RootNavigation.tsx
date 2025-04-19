import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from '.';

function RootNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export {RootNavigation};

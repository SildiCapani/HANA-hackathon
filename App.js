import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './app/index.js'

import { COLORS, icons, images, SIZES } from './constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from './components'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{ 
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="50%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" disabled={true} />
            )  
          }} />
        {/* Other screens go here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



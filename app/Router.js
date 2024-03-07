import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator.js';
import { InformationScreen } from '../components/index.js';
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';



const Stack = createStackNavigator();

 const Router = () => {

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="InfromationScreen" component={InformationScreen} />
        
      </Stack.Navigator>
        
    </NavigationContainer>

  );
}
export default Router
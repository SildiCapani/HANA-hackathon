import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator.js';
import { InformationScreen } from '../components/index.js';
import { createStackNavigator } from "@react-navigation/stack";



const Stack = createStackNavigator();

 const Router = () => {

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
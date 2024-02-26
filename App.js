import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/index.js';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { COLORS, icons, images, SIZES } from './constants'
import { LinksList, ScreenHeaderBtn, Welcome} from './components'


const Stack = createBottomTabNavigator();

export const unstable_settings = {
  initialRouteName: "home",
}

export default function App() {

  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const homeName = "Home";
  const listsName = "List";
  const linksName = "Links";

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === listsName) {
            iconName = focused ? 'list' : 'list-outline';

          } else if (rn === linksName) {
            iconName = focused ? 'link' : 'link-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
        })}
      >
        {/* <Stack.Screen name="Home" component={Home}
          options={{ 
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="55%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" disabled={true} />
            )  
          }} /> */}
        <Stack.Screen name={homeName} component={Home} />
        <Stack.Screen name={listsName} component={LinksList} />
        <Stack.Screen name={linksName} component={LinksList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

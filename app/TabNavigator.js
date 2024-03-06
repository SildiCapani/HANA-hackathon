import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './index';
import { InformationList, LinksList } from '../components';


const Tab = createBottomTabNavigator();

export const unstable_settings = {
  initialRouteName: "home",
}

const TabNavigator = (props) => {

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const homeName = "Home";
  const listsName = "Info-List";
  const linksName = "Links";

  return (
      <Tab.Navigator
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
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={listsName} component={InformationList} />
        <Tab.Screen name={linksName} component={LinksList} />
        
      </Tab.Navigator>
  );
}

export default TabNavigator;
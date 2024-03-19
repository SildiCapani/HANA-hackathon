import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home } from './index';
import { InformationList, LinksList, ScreenHeaderBtn, WebLinks } from '../components';
import { COLORS, icons } from "../constants";
import { Image } from 'react-native';



const Tab = createBottomTabNavigator();

export const unstable_settings = {
  initialRouteName: "home",
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius: 12 }}
      source={require('../assets/images/logo.png')}
    />
  );
}

const TabNavigator = ({ navigation }) => {



  const homeName = "Home";
  const listsName = "Info-List";
  const linksName = "Links";
  const webLinks = "Web-PDF's"

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
          } else if (rn === webLinks) {
            iconName = focused ? 'document-text' : 'document-text-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70, backgroundColor: '#000'}
        })}
        >

        <Tab.Screen name={homeName} component={Home} options={{
          headerStyle: { backgroundColor: '#38c9ba' }, headerTitle: (props) => <LogoTitle {...props} />,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="50%" />
          ),
        }} />

        <Tab.Screen name={listsName} component={InformationList} options={{
          headerStyle: { backgroundColor: "#c12f3c" }, headerTintColor: '#fff',
          headerShadowVisible: false,
          headerTitle: (props) => <LogoTitle {...props} />,
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension="50%" />
          // ),
        }} />

        <Tab.Screen name={webLinks} component={WebLinks} options={{
          headerStyle: { backgroundColor: '#122337' }, headerTintColor: '#fff',
          headerShadowVisible: false,
          headerTitle: (props) => <LogoTitle {...props} />,
        }} />

        <Tab.Screen name={linksName} component={LinksList} options={{
          headerStyle: { backgroundColor: '#4e3efa' },
          headerShadowVisible: false,
          headerTitle: (props) => <LogoTitle {...props} />,
        }} />
        
      </Tab.Navigator>
  );
}

export default TabNavigator;
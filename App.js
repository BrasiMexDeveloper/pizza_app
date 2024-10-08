import HomeScreen from './screens/Home/HomeScreen';
import DealsScreen from './screens/Order/DealsScreen';
import MenuScreen from './screens/Details/MenuScreen';
import SignInScreen from './services/SignInScreen';
import MoreScreen from './screens/Home/MoreScreen';
import BuildPizzaScreen from './screens/Home/BuildPizzaScreen';
import Pasta from './components/Pasta/Pasta';
import Wings from './components/Wings/Wings';
import Salads from './components/Salads/Salads';
import Desserts from './components/Desserts/Desserts';
import Drinks from './components/Drinks/Drinks';
import Sauces from './components/Sauces/Sauces';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu"
        options={{
          headerShown: false,
        }} component={HomeScreen} />
      <Stack.Screen name="Pasta" options={{
        headerShown: false,
      }} component={Pasta} />
      <Stack.Screen name="Wings" options={{
        headerShown: false,
      }} component={Wings} />
      <Stack.Screen name="Salads" options={{
        headerShown: false,
      }} component={Salads} />
      <Stack.Screen name="Desserts" options={{
        headerShown: false,
      }} component={Desserts} />
      <Stack.Screen name="Drinks" options={{
        headerShown: false,
      }} component={Drinks} />
      <Stack.Screen name="Sauces" options={{
        headerShown: false,
      }} component={Sauces} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5,
          },
          tabBarStyle: [
            {
              display: 'flex',
              padding: 10,
              margin: 2,
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Deals"
          component={DealsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pricetags" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sign In"
          component={SignInScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Build"
          component={BuildPizzaScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pizza" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ellipsis-horizontal" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
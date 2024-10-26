import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext'; 
import LoginScreen from './LogInScreen';
import CourseDetailScreen from './CourseDetailScreen';
import CalculateFeesScreen from './CalculateFeesScreen';
import ExploreCoursesScreen from './ExploreCoursesScreen';
import Cart from './Cart';
import Orders from './Orders'; // Ensure this component is defined
import OrderConfirmation from './OrderConfirmation';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack navigator for the course-related screens
function CourseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExploreCourses" component={ExploreCoursesScreen} options={{ title: 'Explore Courses' }} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Details' }} />
      <Stack.Screen name="CalculateFees" component={CalculateFeesScreen} options={{ title: 'Calculate Fees' }} />
    </Stack.Navigator>
  );
}

// Main tab navigator for Home, Cart, and Orders with bottom navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
          } else if (route.name === 'Orders') {
            iconName = 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#A52A2A',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={CourseStack} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Main App component with Login and Tab Navigation
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}


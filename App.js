import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './App/Shared/Colors';
import TabNavigation from './App/Navigation/TabNavigation';
import KpiNavigation from './App/Navigation/KpiNavigation';
import OpeningPage from './App/Screens/opening.js'; // Correct path
import Login from './App/Screens/login.js';        // Correct path
import Signup from './App/Screens/Signup.js';      // Correct path
import UserSignup1 from './App/Screens/user/UserSignup.js'; // Correct path

  
// Custom Header Component
function CustomHeader({ navigation }) {
  const userProfile = require('./assets/user.png'); // Adjust the path to your user image
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.userLocation}>Location</Text>
      </View>
      <Image source={userProfile} style={styles.profileImage} />
    </View>
  );
}

// Drawer Navigator for Home and KPI screens
function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        header: () => <CustomHeader navigation={navigation} />, // Custom header
      })}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen
        name="KPI"
        component={KpiNavigation}
        options={{
          headerShown: false, // Hide default header for KPI
        }}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator for the full flow
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningPage">
        {/* Opening/Login/Signup Screens */}
        <Stack.Screen
          name="OpeningPage"
          component={OpeningPage}
          options={{ headerShown: false }} // Hides the header for OpeningPage
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Hides the header for Login
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserSignup1"
          component={UserSignup1}
          options={{ headerShown: false }}
        />
        {/* Drawer Navigator */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }} // No header for the DrawerNavigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.SECOND_PRIMARY, // Red color for the header
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60,
    marginTop: 45,
  },
  userInfo: {
    flex: 4,
    alignItems: 'flex-end',
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userLocation: {
    color: 'white',
    fontSize: 14,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

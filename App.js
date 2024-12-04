import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from './App/Shared/Colors';
import TabNavigation from './App/Navigation/TabNavigation';
import KpiNavigation from './App/Navigation/KpiNavigation'; // Import the KPI Navigation

// Define a custom header component
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

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} />, // Set the custom header
        })}
      >
        {/* Render the TabNavigation as a screen in the Drawer Navigator */}
        <Drawer.Screen name="Home" component={TabNavigation} />
        
        {/* Add KPI Navigation as a separate screen in the Drawer */}
        <Drawer.Screen 
          name="KPI" 
          component={KpiNavigation} 
          options={{
            headerShown: false, // Hide the default header
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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
  menuButton: {
    flex: 1,
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
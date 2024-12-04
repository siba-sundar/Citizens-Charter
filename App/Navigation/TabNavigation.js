import { View, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../Screens/Home';
import Chatbot from '../Screens/Chatbot';
import Location from '../Screens/Location';
import Notification from '../Screens/Notification';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
          tabBarShowLabel: false, // Remove labels for minimalistic look
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused ? styles.activeIconContainer : styles.inactiveIconContainer,
                ]}
              >
                <Entypo name="home" size={40} color={focused ? 'white' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={Location}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused ? styles.activeIconContainer : styles.inactiveIconContainer,
                ]}
              >
                <Ionicons name="location-sharp" size={40} color={focused ? 'white' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused ? styles.activeIconContainer : styles.inactiveIconContainer,
                ]}
              >
                <Ionicons name="notifications" size={40} color={focused ? 'white' : 'black'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chatbot"
          component={Chatbot}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.iconContainer,
                  focused ? styles.activeIconContainer : styles.inactiveIconContainer,
                ]}
              >
                <MaterialCommunityIcons
                  name="robot-happy"
                  size={40}
                  color={focused ? 'white' : 'black'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Transparent background for the container behind the tab bar
  },
  tabBarStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    height: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center', // Center the items in the tab bar
  },
  iconContainer: {
    width: 60, // Adjusted width for proper centering
    height: 60, // Adjusted height for proper centering
    borderRadius: 15,
    alignItems: 'center', // Center icon horizontally
    justifyContent: 'center', // Center icon vertically
    marginBottom: 30, // Added margin for alignment within tab bar
  },
  activeIconContainer: {
    backgroundColor: '#E53935',
  },
  inactiveIconContainer: {
    backgroundColor: 'transparent',
  },
});
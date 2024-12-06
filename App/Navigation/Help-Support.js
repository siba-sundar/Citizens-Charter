import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Colors from '../Shared/Colors';

// Import your KPI-related screens
import PerformanceDashboardList from '../Components/Home/PerformanceDashboardList';
import HelpSupport from "../Components/Help&Support/SupportDetails.js"

export default function HelpSupportNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.WHITE,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontSize: 14,
          color: Colors.BLACK,
        },
        ...TransitionPresets.SlideFromRightIOS, // Add smooth transition
      }}
    >
      <Stack.Screen
        name="performance-dashboard"
        component={PerformanceDashboardList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Help-Support"
        component={HelpSupport}
        options={{
          title: 'Help & Support',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
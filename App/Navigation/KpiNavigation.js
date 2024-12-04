import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Colors from '../Shared/Colors';

// Import your KPI-related screens
import PerformanceDashboardList from '../Components/Home/PerformanceDashboardList';
import KpiDetail from '../Components/KPI/KpiDetail'; // Make sure this path is correct

export default function KpiNavigation() {
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
        name="kpi-detail"
        component={KpiDetail}
        options={{
          title: 'KPI Details',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
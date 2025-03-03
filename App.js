import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './src/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppNavigation></AppNavigation>
  );
}

import React from 'react';
import App from './index';
import { createStackNavigator } from '@react-navigation/stack';
import ExcerciseDetailsScreen from './excercise-details';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={App} options={{ title: 'Home' }} />
      <Stack.Screen name="exercise-details" component={ExcerciseDetailsScreen} options={{ title: 'Exercise Details' }} />
    </Stack.Navigator>
  );
};

export default Layout;
import React from 'react';
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="excercise-details" options={{ title: 'Exercise Details' }} />

    </Stack.Navigator>
  );

};

export default Layout;


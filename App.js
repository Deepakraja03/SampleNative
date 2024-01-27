// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import GPAComponent from './src/screens/GPAComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" " component={HomeScreen} />
        <Stack.Screen name="Details" component={GPAComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

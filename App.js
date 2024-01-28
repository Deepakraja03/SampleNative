import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import Sem1 from './src/screens/Sem1';
import Sem2 from './src/screens/Sem2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Semester 1" component={Sem1} />
        <Stack.Screen name="Semester 2" component={Sem2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

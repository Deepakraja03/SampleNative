import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sem1 from './src/screens/ComputerScience/Sem1';
import Sem2 from './src/screens/ComputerScience/Sem2';
import Sem3 from './src/screens/ComputerScience/Sem3';
import Sem4 from './src/screens/ComputerScience/Sem4';
import Sem5 from './src/screens/ComputerScience/Sem5';
import Sem6 from './src/screens/ComputerScience/Sem6';
import Sem7 from './src/screens/ComputerScience/Sem7';
import Sem8 from './src/screens/ComputerScience/Sem8';
import Courses from './src/screens/Courses';
import ComputerScience from './src/screens/ComputerScience';
import InformationTechnology from './src/screens/InformationTechnology';
import Home from './Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="ComputerScience" component={ComputerScience} />
        <Stack.Screen name="Semester 1" component={Sem1} />
        <Stack.Screen name="Semester 2" component={Sem2} />
        <Stack.Screen name="Semester 3" component={Sem3} />
        <Stack.Screen name="Semester 4" component={Sem4} />
        <Stack.Screen name="Semester 5" component={Sem5} />
        <Stack.Screen name="Semester 6" component={Sem6} />
        <Stack.Screen name="Semester 7" component={Sem7} />
        <Stack.Screen name="Semester 8" component={Sem8} />
        <Stack.Screen name="InformationTechnology" component={InformationTechnology} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

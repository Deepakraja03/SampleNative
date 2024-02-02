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
import ECE from './src/screens/ECE';
import IT_Sem1 from './src/screens/InformationTechnology/IT_Sem1';
import IT_Sem2 from './src/screens/InformationTechnology/IT_Sem2';
import IT_Sem3 from './src/screens/InformationTechnology/IT_Sem3';
import IT_Sem4 from './src/screens/InformationTechnology/IT_Sem4';
import IT_sem5 from './src/screens/InformationTechnology/IT_sem5';
import IT_Sem6 from './src/screens/InformationTechnology/IT_Sem6';
import IT_Sem7 from './src/screens/InformationTechnology/IT_Sem7';
import IT_Sem8 from './src/screens/InformationTechnology/IT_Sem8';
import ECE_Sem1 from './src/screens/ECE/ECE_Sem1';
import ECE_Sem2 from './src/screens/ECE/ECE_Sem2';
import ECE_Sem3 from './src/screens/ECE/ECE_Sem3';
import ECE_Sem4 from './src/screens/ECE/ECE_Sem4';
import ECE_Sem5 from './src/screens/ECE/ECE_Sem5';
import ECE_Sem6 from './src/screens/ECE/ECE_Sem6';
import ECE_Sem7 from './src/screens/ECE/ECE_Sem7';
import ECE_Sem8 from './src/screens/ECE/ECE_Sem8';

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
        <Stack.Screen name="ITsem1" component={IT_Sem1} />
        <Stack.Screen name="ITsem2" component={IT_Sem2} />
        <Stack.Screen name="ITsem3" component={IT_Sem3} />
        <Stack.Screen name="ITsem4" component={IT_Sem4} />
        <Stack.Screen name="ITsem5" component={IT_sem5} />
        <Stack.Screen name="ITsem6" component={IT_Sem6} />
        <Stack.Screen name="ITsem7" component={IT_Sem7} />
        <Stack.Screen name="ITsem8" component={IT_Sem8} />
        <Stack.Screen name="ECE" component={ECE} />
        <Stack.Screen name="ECE_Sem1" component={ECE_Sem1} />
        <Stack.Screen name="ECE_Sem2" component={ECE_Sem2} />
        <Stack.Screen name="ECE_Sem3" component={ECE_Sem3} />
        <Stack.Screen name="ECE_Sem4" component={ECE_Sem4} />
        <Stack.Screen name="ECE_Sem5" component={ECE_Sem5} />
        <Stack.Screen name="ECE_Sem6" component={ECE_Sem6} />
        <Stack.Screen name="ECE_Sem7" component={ECE_Sem7} />
        <Stack.Screen name="ECE_Sem8" component={ECE_Sem8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Sem1 from './Sem1'; // Import Sem1 component
import Sem2 from './Sem2'; // Import Sem2 component

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = ({ navigation }) => {
  return (
    <StyledView>
      <StyledText className='text-center my-5'>Calculate Your CGPA</StyledText>
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('Semester 1')} // Navigate to Sem1 when button is clicked
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 1
        </StyledText>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('Semester 2')} // Navigate to Sem2 when button is clicked
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 2
        </StyledText>
      </TouchableOpacity>
    </StyledView>
  );
};

export default HomeScreen;

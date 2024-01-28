// src/screens/Courses.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
// import { withExpoSnack } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Courses = ({ navigation }) => {
  return (
    <StyledView className='bg-gray-200 h-screen'>
      <StyledText className='text-center my-10 font-semibold text-lg'>Select Your Branch</StyledText>
      <StyledTouchableOpacity className='mx-4'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ComputerScience')}
      >
        <StyledText className='text-xl'>
          Computer Science
        </StyledText>
      </StyledTouchableOpacity>
      <StyledView className='my-5'>
      <StyledTouchableOpacity className='mx-4'
        style={{
            backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ComputerScience')}
      >
        <StyledText className='text-xl'>
          InformationTechnology
        </StyledText>
      </StyledTouchableOpacity>
        </StyledView>
    </StyledView>
  );
};

export default Courses;

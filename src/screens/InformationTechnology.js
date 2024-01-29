// InformationTechnology.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const InformationTechnology = ({ navigation }) => {
  return (
    <StyledView className='bg-green-100 h-screen'>
      <StyledText className='text-center my-5'>Calculate Your GPA</StyledText>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#4CAF50',
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
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#4CAF50',
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
      </StyledTouchableOpacity>
      {/* Repeat the pattern for other semesters */}
    </StyledView>
  );
};

export default InformationTechnology;

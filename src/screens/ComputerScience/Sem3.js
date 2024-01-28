// src/screens/Sem3.js
import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';
import { Picker } from '@react-native-picker/picker';

const StyledView = styled(View);
const StyledText = styled(Text);

const calculateGPA = (courses) => {
  const gradePoints = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'RA': 0,
    'SA': 0,
    'W': 0,
  };

  const numerator = courses.reduce((acc, course) => acc + (gradePoints[course.grade] * course.credits), 0);
  const denominator = courses.reduce((acc, course) => acc + course.credits, 0);

  if (denominator === 0) {
    return 0; // Avoid division by zero
  }

  const gpa = numerator / denominator;
  return gpa;
};

const Sem3 = () => {
  const [courses, setCourses] = useState([
    { code: 'MA3354', name: 'Discrete Mathematics', credits: 4, grade: '' },
    { code: 'CS3351', name: 'Digital Principles and Computer Organization', credits: 4, grade: '' },
    { code: 'CS3352', name: 'Foundations of Data Science', credits: 3, grade: '' },
    { code: 'CS3301', name: 'Data Structures', credits: 3, grade: '' },
    { code: 'CS3391', name: 'Object Oriented Programming', credits: 3, grade: '' },
    { code: 'CS3311', name: 'Data Structures Laboratory', credits: 1.5, grade: '' },
    { code: 'CS3381', name: 'Object Oriented Programming Laboratory', credits: 1.5, grade: '' },
    { code: 'CS3361', name: 'Data Science Laboratory', credits: 2, grade: '' },
    { code: 'GE3361', name: 'Professional Development', credits: 1, grade: '' },
  ]);

  const [newCourse, setNewCourse] = useState({
    code: '',
    name: '',
    credits: 0,
    grade: '',
  });

  const gpa = calculateGPA(courses);

  return (
    <ScrollView>
      <StyledView className='bg-orange-200'>
        <StyledText className='text-center py-4 font-bold text-xl uppercase mx-4'>Select the Grades you Scored!</StyledText>
        {courses.map((course, index) => (
          <StyledView className='my-2 bg-blue-300 rounded-2xl mx-5' key={index}>
            <StyledText className='px-3 py-3'>{course.code} - {course.name}</StyledText>
            <StyledView className=''>
              <Picker
                selectedValue={course.grade}
                onValueChange={(itemValue) => {
                  const updatedCourses = [...courses];
                  updatedCourses[index].grade = itemValue;
                  setCourses(updatedCourses);
                }}
              >
                <Picker.Item label="Select Grade" value="" />
                <Picker.Item label="O" value="O" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
                <Picker.Item label="RA" value="RA" />
                <Picker.Item label="SA" value="SA" />
                <Picker.Item label="W" value="W" />
              </Picker>
            </StyledView>
          </StyledView>
        ))}
        <StyledView className='my-3 mx-10'>
          <StyledText className='bg-green-300 mx-5 text-center rounded-xl font-extralight text-2xl py-5'>Your GPA: {gpa.toFixed(2)}</StyledText>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default withExpoSnack(Sem3);

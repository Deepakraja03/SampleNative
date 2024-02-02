import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Home = ({ navigation }) => {
    return (
        <StyledView>
            <StyledText className='text-center py-5 text-2xl'>Home</StyledText>
            <StyledTouchableOpacity onPress={() => navigation.navigate('Courses')}>
                <StyledText className='pl-20 font-bold text-2xl bg-blue-300'>Courses</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default Home
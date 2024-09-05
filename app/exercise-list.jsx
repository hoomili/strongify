import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const exercises = [
  { id: '1', name: 'Push-up' },
  { id: '2', name: 'Pull-up' },
  { id: '3', name: 'Squats' },
];

const ExcerciseListScreen = () => {
  return (
    <StyledView className='flex-1 bg-white p-4'>
      <StyledText className='text-xl font-bold mb-4'>Excercise List Screen</StyledText>
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <StyledTouchableOpacity className='p-4 mb-2 bg-gray-200 rounded'>
            <StyledText className='text-xl'>{item.name}</StyledText>
          </StyledTouchableOpacity>
        )}
      />
    </StyledView>
  );
};

export default ExcerciseListScreen;
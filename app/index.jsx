import { Text, View, Button } from 'react-native';
import { Link } from "expo-router";
import { styled } from "nativewind";


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);


export default function App() {
  return (
    <StyledView className='flex-1 justify-center items-center bg-white'>
      <StyledText className='text-xl font-bold mb-4'>Welcome to Strongify</StyledText>
      <Link href='/excercise-details' asChild>
        <StyledButton title='Go to Excercise Details' />
      </Link>
    </StyledView>
  );
}

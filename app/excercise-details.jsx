import { View, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const ExcerciseDetailsScreen = () => {
  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      <StyledText className="text-xl font-bold">Excercise Details Screen</StyledText>
    </StyledView>
  );
};

export default ExcerciseDetailsScreen;
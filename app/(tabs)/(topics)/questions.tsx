import { useTheme } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import AvatarWithText from "../../../components/Atoms/IconCards/AvatarWithText";

const questions = [
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
];
const Questions = () => {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={{ padding: 15, backgroundColor: theme.colors.background }}
    >
      <View>
        {questions.map((question, index) => (
          <AvatarWithText
            key={index}
            abbreviation={`Q${index + 1}`}
            content={question}
            border
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Questions;

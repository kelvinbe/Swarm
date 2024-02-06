import { useTheme } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import SelectableTopicCard from "../../../components/Molecules/Cards/SelectableTopicCard";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";

const topics = [
  {
    title: "Football Predictions",
    content: "How can business leverage artificial intelligence to enhance customer experience?",
    selected: false,
  },
  {
    title: "Football Predictions",
    content: "How can business leverage artificial intelligence to enhance customer experience?",
    selected: true,
  },
  {
    title: "Football Predictions",
    content: "How can business leverage artificial intelligence to enhance customer experience?",
    selected: true,
  },
  {
    title: "Football Predictions",
    content: "How can business leverage artificial intelligence to enhance customer experience?",
    selected: false,
  },
  {
    title: "Football Predictions",
    content: "How can business leverage artificial intelligence to enhance customer experience?",
    selected: false,
  },
];
const SelectTopic = () => {
  const { theme } = useTheme();

  const handleTopicSelect = () => {};
  const handleSubmit = ()=> {};

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background, padding: 15 }}
    >
      <View>
        {topics.map((topic, index) => (
          <SelectableTopicCard
            key={index}
            title={topic.title}
            content={topic.content}
            selected={topic.selected}
            onTopicSelect={handleTopicSelect}
          />
        ))}
      </View>
      <View style={{paddingTop: 20}}>
        <ActionButton onPress={handleSubmit}>Submit</ActionButton>
      </View>
    </ScrollView>
  );
};

export default SelectTopic;

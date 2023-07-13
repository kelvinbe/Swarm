import { ScrollView, Text, View } from "react-native";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";

const topics = [
  {
    id: 1,
    title: "Financial Prediction",
    subscribed: false,
  },
  {
    id: 2,
    title: "Environmental Issues",
    subscribed: true,
  },
  {
    id: 3,
    title: "Sports Prediction",
    subscribed: false,
  },
  {
    id: 4,
    title: "Product Recommendation",
    subscribed: true,
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    subscribed: false,
  },
  {
    id: 6,
    title: "Educational Reforms",
    subscribed: false,
  },
];
const TopicSubscriptions = () => {
  const { theme } = useTheme();
  const styles = useStyles()
  const handleSubscription = (data: any) => {};
  
  return (
    <ScrollView style={styles.container}>
      <View style={{gap: 10}}>
        {topics.map((topic, index) => (
          <View style={styles.topics} key={index}>
            <Text>{topic.title}</Text>
            <ActionButton
              onPress={() => handleSubscription(topic.id)}
              width={120}
              backgroundColor={topic.subscribed ? theme.colors.disabled : ""}
              color={topic.subscribed ? theme.colors.text : ""}
              height={40}
            >
              {topic.subscribed ? "Unsubscribe" : "Subscribe"}
            </ActionButton>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TopicSubscriptions;

const useStyles = makeStyles((theme)=>({
    container: {
        backgroundColor: theme.colors.background,
        padding: 15,
    },
    topics: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}))

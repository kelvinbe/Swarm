import { View, Text } from "react-native";
import TopicTitle from "../../Atoms/IconCards/TopicTitle";
import IconButton from "../../Atoms/Buttons/IconButton";
import { makeStyles, useTheme } from "@rneui/themed";
import ImageCard from "../../Atoms/Images/ImageCard";

const question={
    title: 'Artificial Intelligence',
    imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1519310/capsule_616x353.jpg?t=1670963349",
    content: 'How can business leverage artificial intelligence to enhance customer experience?',
    answers: [
        {
          id: "1",
          content:`One way businesses can leverage AI to enhance customer experiences is by implementing chatbots. Chatbots can provide instant and personalized customer support, offering 24/7 assistance and reducing response times.`,
          duration: '3 Minutes ago'
        },
        {
          id: '2',
          content: `AI-powered recommendation systems can enhance customer experiences by providing personalized product recommendations based on customer preferences and behavior. This helps businesses  increase customer satisfaction and drive sales.`,
          duration: '7 Hours ago'
        }
      ]
}
const Question = () => {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TopicTitle title={question.title}></TopicTitle>
        <IconButton name="add" onPress={() => null} width={110} title="Join" />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={[styles.textStyles,{lineHeight: 20}]}>
          {question.content}
        </Text>
        <ImageCard imageUrl={question.imageUrl} />
      </View>
      <View style={{ gap: 8 }}>
        <Text style={[styles.textStyles,{fontWeight: '700'}]}>Answers</Text>
        {question.answers.map((answer, index)=>(
            <View key={index} style={{ gap: 5 }}>
                <Text style={[styles.textStyles,{fontWeight: '600'}]}>Answer {index+1}</Text>
                <Text style={styles.textStyles}>{answer.content}</Text>
                <Text style={[styles.textStyles,{fontWeight: '600'}]}>Posted: {answer.duration}</Text>
            </View>
        ))}
      </View>
    </View>
  );
};

export default Question;

const useStyles = makeStyles((theme) => ({
  container: {
    gap: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyles: {
    color: theme.colors.text,
    lineHeight: 23
  }
}));

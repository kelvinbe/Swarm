import { CheckBox } from "@rneui/base";
import { ThemeProvider, makeStyles, useThemeMode } from "@rneui/themed";
import { useEffect, useState } from "react";
import { View, Text, useColorScheme } from "react-native";
import TopicSelect from "../../Molecules/Topics/TopicSelect";
import { darkTheme, lightTheme } from "../../../rn-elements";
import SocialInteractionButton from "../../Atoms/Buttons/SocialInteractionButton";
import SocialInteraction from "../../Molecules/Social/SocialInteraction";

interface Props {
  Topics?:  {
    id: number,
    title: string,
    checked: boolean,
    posts: number,
    views: number,
  }[]
}

const AvailableTopics = (props: Props) => {
  const {Topics} = props

  const [topics, setTopics] = useState(Topics)
  const styles = useStyles();
  const handleTopicSelect = (index: number)=>{
    const updatedTopics = [...topics];
    updatedTopics[index] = {
      ...updatedTopics[index],
      checked: !updatedTopics[index].checked,
    };
    setTopics(updatedTopics);

}

useEffect(() => {

}, [topics])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleStyles}>Available Topics</Text>
      </View>
      <View style={styles.topicsContainer}>
        <View style={styles.topicViewContainer}>
          <View style={styles.topicsStyles}>
            <Text style={styles.titleStyles}>Topics</Text>
          </View>
          <View style={styles.postsStyles}>
            <Text style={styles.titleStyles}>Posts</Text>
          </View>
          <View style={styles.viewsStyles}>
            <Text style={styles.titleStyles}>Views</Text>
          </View>
        </View>
        {topics?.map((topic, index) => (
          <TopicSelect
            checked={topic.checked}
            title={topic.title}
            posts={topic.posts}
            views={topic.views}
            key={index}
            onPress={()=>handleTopicSelect(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default AvailableTopics;

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: "100%",
    gap: 8,
  },
  topicsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 8,
  },
  topicViewContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  titleStyles: {
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  topicsStyles: {
    width: "60%",
    padding: 0,
    margin: 0,
  },
  postsStyles: {
    width: "20%",
    flex: 1,
    justifyContent: "center",
  },
  viewsStyles: {
    width: "20%",
    flex: 1,
    justifyContent: "center",
  },
}));

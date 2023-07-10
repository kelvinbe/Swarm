import { CheckBox } from "@rneui/base";
import { ThemeProvider, makeStyles, useThemeMode } from "@rneui/themed";
import { useState } from "react";
import { View, Text, useColorScheme } from "react-native";
import TopicSelect from "../../Molecules/Topics/TopicSelect";
import { darkTheme, lightTheme } from "../../../rn-elements";
import SocialInteractionButton from "../../Atoms/Buttons/SocialInteractionButton";
import SocialInteraction from "../../Molecules/Social/SocialInteraction";

interface Props {}
const topics = [
  {
    id: 1,
    title: "Financial Prediction",
    checked: false,
    posts: 453,
    views: 83773,
  },
  {
    id: 2,
    title: "Environmental Issues",
    checked: true,
    posts: 453,
    views: 83773,
  },
  {
    id: 3,
    title: "Sports Prediction",
    checked: false,
    posts: 453,
    views: 83773,
  },
  {
    id: 4,
    title: "Product Recommendation",
    checked: true,
    posts: 453,
    views: 83773,
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    checked: false,
    posts: 453,
    views: 83773,
  },
  {
    id: 6,
    title: "Educational Reforms",
    checked: false,
    posts: 453,
    views: 83773,
  },
];
const AvailableTopics = () => {
  const styles = useStyles();
  const handleTopicSelect = (data: any)=>{
    /**
     * @todo implement topic select logic
     */
  }

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
        {topics.map((topic, index) => (
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

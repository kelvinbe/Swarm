import { View, Text, TouchableOpacity } from "react-native";
import SwarmDetailsCard from "../../Molecules/Cards/SwarmDetailsCard";
import { Ionicons } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";
import AvatarWithText from "../../Atoms/IconCards/AvatarWithText";
import ActionButton from "../../Atoms/Buttons/ActionButton";

const comments = [
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur est a, mattis tellus. Sed dignissim,",
  },
];
const SwarmDetailsComponent = () => {
  const styles = useStyles();
  const {theme} = useTheme()

  const handleEditSwarm = () => {
    /**
     * @todo implement edit swarm
     */
  };
  const handleDeleteSwarm = () => {
    /**
     * @todo implement delete swarm
     */
  };
  return (
    <View style={styles.container}>
      <SwarmDetailsCard
        updateTopicStats={() => null}
        title={"Data Privacy and Security"}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae nulla reiciendis fuga soluta. Aspernatur cupiditate tempora dicta tenetur quod`}
        imageUrl={
          "https://cdn.xxl.thumbs.canstockphoto.com/notebook-with-words-data-privacy-internet-technology-concept-picture_csp25761810.jpg"
        }
        author={"Dan Abfalo"}
        date={new Date()}
      />
      <View>
        <TouchableOpacity onPress={() => null}>
          <View style={styles.swarmActivity}>
            <Ionicons name="stats-chart" size={24} color={theme.colors.text} />
            <Text style={styles.textStyles}>
              View Swarm Activity
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyles}>Comments</Text>
        {comments.map((comment, index) => (
          <AvatarWithText
            key={index}
            content={comment.content}
            avatar={comment.avatar}
          />
        ))}
      </View>
      <View style={{ gap: 15 }}>
        <ActionButton fullWidth onPress={handleEditSwarm}>
          Edit Swarm
        </ActionButton>
        <ActionButton
          fullWidth
          backgroundColor="#E6E6E6"
          color={"#000"}
          onPress={handleDeleteSwarm}
        >
          Delete Swarm
        </ActionButton>
      </View>
    </View>
  );
};

export default SwarmDetailsComponent;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingVertical: 10,
  },
  swarmActivity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 10,
  },
  textStyles: {
    fontWeight: "600", 
    fontSize: 17, 
    color: theme.colors.text
  }
}));

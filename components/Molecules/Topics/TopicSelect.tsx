import { CheckBox,  makeStyles,  useTheme } from "@rneui/themed";
import { View, Text } from "react-native";
import { CountUp } from 'use-count-up'


interface IProps {
  title: string;
  posts: number;
  views: number;
  checked: boolean;
  onPress: () => void;
}
const TopicSelect = (props: IProps) => {
  const { title, posts, views, checked, onPress } = props;
  const styles = useStyles();
  const {theme} = useTheme();

  return (
      <View style={styles.topicViewContainer}>
        <View style={styles.topicsStyles}>
          <CheckBox
            checked={checked}
            title={title}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={"checkbox-blank-outline"}
            checkedColor={theme.colors.primary}
            size={25}
            onPress={onPress}
            textStyle={styles.textStyle}
            containerStyle={{
              backgroundColor: "transparent",
              margin: 0,
              padding: 0,
              marginLeft: 0,
              paddingRight: 0,
            }}
          ></CheckBox>
        </View>
        <View style={styles.postsStyles}>
          <Text style={styles.titleStyles}>
          <CountUp isCounting={checked} end={posts} duration={3.2} />

          </Text>
        </View>
        <View style={styles.viewsStyles}>
          <Text style={styles.titleStyles}>{views}</Text>
        </View>
      </View>
  );
};

export default TopicSelect;

const useStyles = makeStyles((theme, props) => ({
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
  textStyle: {
    fontWeight: "400",
    color: theme.colors.text,
    fontSize: 15,
    marginLeft: 5,
  },
}));

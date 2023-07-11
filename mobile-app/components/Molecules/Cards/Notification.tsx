import { Avatar, Button, Icon } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import { View, Text } from "react-native";

interface IProps{
    profileUrl: string;
    title: string;
    content: string;
    duration: string;
    read: boolean;
    onMarkAsRead:()=>void;
    setIsVisible: (isVisible: boolean)=>void;
}
const Notification = (props: IProps) => {
  const {profileUrl, title, content, duration, read, onMarkAsRead, setIsVisible} = props
  const styles = useStyles();
  const {theme} = useTheme()
  const handleMore = ()=>{
    setIsVisible(true)
  }
  return (
    <View style={styles.containerStyles}>
      <View style={styles.notificationContainerStylels}>
        <View style={styles.avatarViewStyles}>
          <Avatar
            rounded
            size={55}
            source={{
              uri: profileUrl,
            }}
          />
        </View>
        <View style={styles.contentContainerStyles}>
          <View style={styles.headerViewStyles}>
            <Text style={{fontSize: 14, fontWeight: "800" , color: theme.colors.text}}>
              {title}
            </Text>
            <Button buttonStyle={styles.buttonStyles} onPress={handleMore}>
              <Icon name="more-horiz" color={theme.colors.text} />
            </Button>
          </View>
          <View>
            <Text style={{fontWeight: read?'400': '500', color: theme.colors.text}} onPress={onMarkAsRead}>
            {content} 
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.timelineViewStyles}>
        <Text style={{fontSize: 15, fontWeight: '400', color: theme.colors.text}}>Poseted: {duration} {duration==='Now'? '': 'ago'}</Text>
      </View>
    </View>
  );
};

export default Notification;

const useStyles = makeStyles((theme, props) => ({
  containerStyles: {
    width: "100%",
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.stroke1,
  },
  notificationContainerStylels: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  timelineViewStyles: {},
  avatarViewStyles: {
    width: "20%",
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  },
  contentContainerStyles: {
    width: "80%",
    paddingLeft: 0,
  },
  headerViewStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyles: {
    width: 40,
    display: "flex",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "transparent",
  },
}));

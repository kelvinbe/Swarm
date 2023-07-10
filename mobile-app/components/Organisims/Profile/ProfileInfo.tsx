import { View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import ProfileCard from "../../Molecules/Cards/ProfileCard";
import { makeStyles, useTheme } from "@rneui/themed";
import ToggleField from "../../Atoms/Toggles/ToggleField";
import { Icon, Button } from "@rneui/base";

const primaryLinks = [
  {
    tittle: "Achievements",
    link: "../../../app/login",
  },
  {
    tittle: "History And Statistics",
    link: "../../../app/login",
  },
  {
    tittle: "Accounts and Login",
    link: "../../../app/login",
  },
  {
    tittle: "Settings",
    link: "../../../app/login",
  },
];

const secondaryLinks = [
  {
    tittle: "Privacy And Security",
    link: "../../../app/login",
  },
  {
    tittle: "Support",
    link: "../../../app/login",
  },
  {
    tittle: "About",
    link: "../../../app/login",
  },
];
const ProfileInfo = () => {
  const styles = useStyles();
  const router = useRouter();
  const {theme} = useTheme()

  const handleProfileEdit=()=>{
    /**
     * @todo implement profile edit logic
     */
  }
  const handleNotificationCheck = ()=>{
    /**
     * @todo implement notifcation check
     */
  }

  const handleLogOut = ()=>{
    /**
     * @todo implement logout feature
     */
  }
  return (
    <View style={styles.containerStyles}>
      <ProfileCard
        name="Vladimir Putin"
        description="Joined in 2000"
        onEdit={handleProfileEdit}
        profileUrl="https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg"
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.stroke1,
          paddingBottom: 18,
        }}
      >
        <View style={styles.linksViewStyles}>
          {primaryLinks.map((item, index) => (
            <TouchableOpacity key={index}>
              <Link href={item.link} style={styles.linkStyles}>
                {item.tittle}
              </Link>
            </TouchableOpacity>
          ))}
        </View>
        <ToggleField
          onCheck={handleNotificationCheck}
          title="Notifications"
          color={theme.colors.text}
          fontSize={16}
          bold
        />
      </View>
      <View>
        <View
          style={{
            paddingTop: 16,
          }}
        >
          <View style={styles.linksViewStyles}>
            {secondaryLinks.map((item, index) => (
              <TouchableOpacity key={index}>
                <Link href={item.link} style={styles.linkStyles}>
                  {item.tittle}
                </Link>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <Button
        buttonStyle={styles.buttonStyles}
        containerStyle={{ width: 90, marginTop: 80 }}
        radius={"lg"}
        titleStyle={{ color: theme.colors.text }}
        onPress={handleLogOut}
      >
        <Icon name="logout" color={theme.colors.text} />
        Logout
      </Button>
    </View>
  );
};

export default ProfileInfo;

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    paddingVertical: 20,
  },
  linksViewStyles: {
    gap: 20,
    paddingVertical: 10,
  },
  linkStyles: {
    color: theme.colors.text,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
  buttonStyles: {
    backgroundColor: "transparent",
    paddingLeft: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
}));

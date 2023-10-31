import { View, ScrollView, Text } from "react-native";
import Logo from "../components/Atoms/Brand/Logo";
import ActionButton from "../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const EmailVerfication = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const {push} = useRouter()
  const handleVerifiedEmail = () => {
    /**
     * @todo implement logic to check if email is verified
     */
    push('about-you')
  };
  const handleSignOut = () => {};
  return (
    <ScrollView style={{backgroundColor: theme.colors.background, padding: 15,}}>
    <View style={styles.container}>
      <Text style={[styles.textStyles, {fontWeight: '600', fontSize: 20}]}>Verify Your Email</Text>
      <View>
        <View style={styles.textViews}>
          <MaterialCommunityIcons name="email-outline" size={60} color={theme.colors.text}/>
          <Text style={[styles.textStyles, {fontWeight: '600',}]}>Verify Your Email</Text>
          <Text style={styles.textStyles}>Tap on the link we sent to Someone@mail.com </Text>
        </View>
      </View>
      <View style={{gap: 10, width: '100%'}}>
          <ActionButton fullWidth onPress={handleVerifiedEmail}>
            I’ve verified my email
          </ActionButton>
          <ActionButton
            color={theme.colors.text}
            backgroundColor={theme.colors.disabled}
            fullWidth
            onPress={handleSignOut}
          >
            Sign Out
          </ActionButton>
        </View>
    </View>
    </ScrollView>
  );
};

export default EmailVerfication;

const useStyles = makeStyles((theme)=>({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 150,
    },
    textViews: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 200,
    },
    textStyles: {
        color: theme.colors.text,
        textAlign: 'center'
    }
}))

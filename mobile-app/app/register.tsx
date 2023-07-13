import { useTheme } from "@rneui/themed";
import { View, Text, ScrollView } from "react-native";
import Logo from "../components/Atoms/Brand/Logo";
import AuthForm from "../components/Organisims/Authentication/AuthForm";

const Register = ()=>{
    const {theme}= useTheme()
  return (
    <ScrollView style={{padding: 15, backgroundColor: theme.colors.background}}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", color: theme.colors.text }}>
          Create Your Account
        </Text>
      </View>
      <View>
        <AuthForm state="signup"/>
      </View>
    </ScrollView>
  );
} 

export default Register
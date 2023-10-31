import { useTheme } from "@rneui/themed";
import { ScrollView, View, Text } from "react-native";
import PasswordInput from "../components/Organisims/Authentication/PasswordInput";
import ActionButton from "../components/Atoms/Buttons/ActionButton";
import { useRouter } from "expo-router";

const Password = () => {
  const { theme } = useTheme();
  const {push} = useRouter()
  const state: "signup" | "login" = "login";

  return (
    <ScrollView
      style={{ padding: 15, backgroundColor: theme.colors.background }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
            color: theme.colors.text,
          }}
        >
          Enter Password
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <PasswordInput state={state} />
      </View>
      
    </ScrollView>
  );
};

export default Password;

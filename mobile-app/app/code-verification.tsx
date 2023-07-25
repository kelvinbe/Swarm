import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import ActionButton from "../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { useState } from "react";
import BaseInput from "../components/Atoms/Inputs/BaseInput";

const CodeVerification = () => {
  const styles = useStyles();
  const [verifying, setVerifying] = useState<boolean>(false);
  const phone = "+254783927323";
  return (
    <ScrollView style={styles.container}>
      {verifying ? (
        <Verifying phone={phone} />
      ) : (
        <CodeInput setVerifying={setVerifying} />
      )}
    </ScrollView>
  );
};

interface CodeInputProps {
  setVerifying: (verifying: boolean) => void;
}
const CodeInput = (props: CodeInputProps) => {
  const { theme } = useTheme();
  const styles = useStyles();
  const handleContinueTap = () => {
    props.setVerifying(true);
  };
  const [code, setCode] = useState<number>(0);
  return (
    <View>
      <View style={{ paddingBottom: 20 }}>
        <Text style={styles.textStyles}>Enter Code</Text>
      </View>
      <View style={{ gap: 20 }}>
        <Text style={{ color: theme.colors.text, fontWeight: "600" }}>
          Please enter the code we just sent you.
        </Text>
        <View>
          <BaseInput
            keyboardType="numeric"
            onChangeText={(value) => setCode(Number(value))}
            inputStyle={{ textAlign: "center" }}
            placeholder="000000"
            placeholderTextColor={theme.colors.text}
          />
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <ActionButton fullWidth onPress={handleContinueTap}>
          Continue
        </ActionButton>
      </View>
    </View>
  );
};

interface IVerifyProps {
  phone: string;
}
const Verifying = (props: IVerifyProps) => {
  const { theme } = useTheme();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 270, paddingBottom: 20, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <ActivityIndicator size={70} color={theme.colors.primary}/>
        <Text style={{ color: theme.colors.text, fontWeight: "600" }}>Verifying {props.phone}</Text>
      </View>
    </View>
  );
};
export default CodeVerification;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  textStyles: {
    color: theme.colors.text,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
}));

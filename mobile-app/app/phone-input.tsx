import { ScrollView, View, Text } from "react-native";
import ActionButton from "../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import PhoneInput from "react-native-phone-number-input";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";

const Phone = ()=>{
    const {theme} = useTheme();
    const [value, setValue] = useState<string>("");
    const [formattedValue, setFormattedValue] = useState<string>("");

    const phoneInput = useRef<PhoneInput>(null);
    const {push} = useRouter()
    const styles = useStyles();
    const handleTapContinue = ()=>{
      /**
       * @todo implement logic here
       */
      push('code-verification')
    }
    return(
        <ScrollView style={styles.container}>
            <View style={{ paddingBottom: 20}}>
        <Text style={styles.textStyles}>Enter Your Phone Number</Text>
      </View>
      <View style={{ gap: 20 }}>
        <View style={{}}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="KE"
            layout="first"
            placeholder=" "
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={{ width: '100%', gap: 10}}
            countryPickerButtonStyle={styles.countryPickerButtonStyle}
            textContainerStyle={styles.textContainerStyle}
            autoFocus
          />
        </View>
      </View>
      <View style={{paddingTop: 30}}>
        <ActionButton fullWidth onPress={handleTapContinue}>Continue</ActionButton>
      </View>
        </ScrollView>
    )
}

export default Phone;

const useStyles = makeStyles((theme)=>({
    container: {
        padding: 15, 
        backgroundColor: theme.colors.background
    },
    textStyles: {
        color: theme.colors.text, 
        fontWeight: '700', 
        fontSize: 20, 
        textAlign: 'center'
    },
    countryPickerButtonStyle:{
        borderWidth:1, 
        borderRadius: 8, 
        borderColor: theme.colors.stroke, 
        height: 50
    },
    textContainerStyle: {
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: theme.colors.stroke, 
        height: 50, 
        paddingVertical: 0, 
        backgroundColor: theme.colors.background
    }
}))
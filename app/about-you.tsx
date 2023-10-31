import { View, Text, ScrollView } from "react-native";
import BaseInput from "../components/Atoms/Inputs/BaseInput";
import ActionButton from "../components/Atoms/Buttons/ActionButton";
import { useState } from "react";
import { useTheme } from "@rneui/themed";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { useRouter } from "expo-router";

const AboutYou = () => {
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const {push} = useRouter()
  const handleContinue = () => {
    /***
     * @todo implement logic here
     */
    push('phone-input')
  };
  const navigatePrivacyPolicy = () => {};
  const navigateTerms = () => {};
  const handleDateInputFocus = () => {
    setOpen(true);
  };
  const handleDateInputOutOFFocus = () => {
    setOpen(false);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    selectedDate && setDate(selectedDate);
    setOpen(false)
  };

  return (
    <ScrollView
      style={{ padding: 15, backgroundColor: theme.colors.background }}
    >
      <View style={{ paddingBottom: 20 }}>
        <Text
          style={{
            color: theme.colors.text,
            fontWeight: "700",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Tell Us About You
        </Text>
      </View>
      <View style={{ gap: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <View style={{ flex: 0.5 }}>
            <BaseInput
              placeholder="First name..."
              onChangeText={(value) => setFname(value)}
            />
          </View>
          <View style={{ flex: 0.5 }}>
            <BaseInput
              placeholder="Last name..."
              onChangeText={(value) => setLname(value)}
            />
          </View>
        </View>
        <View>
          {!open ? (
            <BaseInput
              placeholder="Date of birth..."
              onChangeText={(value) => setLname(value)}
              onFocus={handleDateInputFocus}
              onBlur={handleDateInputOutOFFocus}
              value={date && dayjs(date).format('DD/MM/YYYY')}
            />
          ) : (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View style={{ paddingTop: 270 }}>
        <ActionButton fullWidth onPress={handleContinue}>
          Continue
        </ActionButton>
        <Text
          style={{ textAlign: "center", padding: 15, color: theme.colors.text }}
        >
          By clicking continue you agree to our
          <Text style={{ color: "#0FA958" }} onPress={navigateTerms}>
            Terms
          </Text>
          and acknowledge our
          <Text style={{ color: "#0FA958" }} onPress={navigatePrivacyPolicy}>
            Privacy policy
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutYou;

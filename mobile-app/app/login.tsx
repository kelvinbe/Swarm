import React from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import {} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import Login from "../components/Organisims/Authentication/Login";
import Logo from "../components/Atoms/Brand/Logo";

const LoginScreen = () => {
  return (
    <ScrollView style={{padding: 15}}>
      <Logo width={70} height={70} />
      <View>
        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>
          Welcome
        </Text>
      </View>
      <View>
        <Login />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

import React from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import AuthForm from "../components/Organisims/Authentication/AuthForm";
import Logo from "../components/Atoms/Brand/Logo";

const LoginScreen = () => {
  const {theme}= useTheme()
  return (
    <ScrollView style={{padding: 15, backgroundColor: theme.colors.background}}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", color: theme.colors.text }}>
          Welcome
        </Text>
      </View>
      <View>
        <AuthForm />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

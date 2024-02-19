import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import store from "../store";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { darkTheme, lightTheme } from "../rn-elements";
import { StatusBar } from "expo-status-bar";
import Logo from "../components/Atoms/Brand/Logo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboard from "../components/Organisims/Onboarding/Onboard";
import {useNavigation} from 'expo-router'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
SplashScreen.preventAutoHideAsync()




export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if(loaded){
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    // Check if the user has onboarded before
    const getFirstTime = async () => {
      // await AsyncStorage.removeItem('hasOnboarded')


      AsyncStorage.getItem('hasOnboarded')
      .then(value => {
        // If the user has onboarded, set isOnboarded to true
        if (value === 'true') {
          setIsOnboarded(true);
        }
      })
      .catch(err => {
        console.log(err);
      });

    const val = await AsyncStorage.getItem('hasOnboarded')

  }

    getFirstTime()
  }, []);


  return (
    <>
      {isOnboarded ? (
        <RootLayoutNav />
      ) : (
        <Onboard setIsFirstTime={setIsOnboarded}  />
      )}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </>
  );
}



function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { theme } = useTheme();
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
          <NavigationThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen
                name="login"
                options={{
                  title: "Login",
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="modal"
                options={{
                  title: "Modal",
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="register"
                options={{
                  title: "Register",
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="password"
                options={{
                  title: "Password",
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="welcome"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="email-verification"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="phone-input"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30  }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="code-verification"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="about-you"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
              <Stack.Screen
                name="payments-track"
                options={{
                  header: (props) => (
                    <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
                      <Logo width={70} height={70} />
                    </View>
                  ),
                }}
              />
            </Stack>
          </NavigationThemeProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeProvider } from '@rneui/themed';
import { darkTheme, lightTheme } from '../rn-elements';
import { StatusBar } from 'expo-status-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
      <StatusBar style={Platform.OS==='ios'? 'light': 'auto'}/>
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Provider
      store={store}
    >
      <ThemeProvider
        theme={colorScheme === "dark" ? darkTheme : lightTheme}
      >
        <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
            <Stack.Screen name="login" options={{presentation: "modal", title: 'Login', }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal', }} />         
            <Stack.Screen name="register" options={{presentation: "modal", title: 'Register',}} />
            <Stack.Screen name="password" options={{presentation: "modal", title: 'Password',}} />
          </Stack>
        </NavigationThemeProvider>
      </ThemeProvider>
    </Provider>
    </>
  );
}

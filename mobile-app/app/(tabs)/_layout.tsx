import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, useColorScheme } from 'react-native';
import { Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {theme} = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tint,
      }}
      initialRouteName='(home)'
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(topics)"
        options={{
          title: 'Topics',
          tabBarIcon: ({ color }) => <Octicons name="book" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(swarms)"
        options={{
          title: 'My Swarms',
          tabBarIcon: ({ color }) => <TabBarIcon name="list-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(notifications)"
        options={{
          title: 'Notifications',
          headerTitle:'Notifications',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: 'Profile',
          headerTitle:'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

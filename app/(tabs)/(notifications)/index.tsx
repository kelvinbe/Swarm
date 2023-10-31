import { View, Text, ScrollView } from "react-native";
import NotificationsList from "../../../components/Organisims/Notifications/NotificationsList";
import { useTheme } from "@rneui/themed";

const Notifications = () => {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={{ padding: 15, backgroundColor: theme.colors.background }}
    >
      <NotificationsList />
    </ScrollView>
  );
};

export default Notifications;

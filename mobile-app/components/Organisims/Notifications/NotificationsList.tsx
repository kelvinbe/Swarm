import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import Notification from "../../Molecules/Cards/Notification";
import { BottomSheet } from "@rneui/themed";
import NotificationActions from "../../Molecules/Cards/NotificationActions";
import FilterCard from "../../Molecules/Cards/FilterCard";

const notifications = [
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: false,
    duration: "Now",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: false,
    duration: "33 Seconds",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: true,
    duration: "9 Minutes",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,

    read: false,
    duration: "8 Hours",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: false,
    duration: "4 days",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: true,
    duration: "5 Months",
  },
  {
    profileUrl:
      "https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg",
    title: "Social Justice and Equality",
    content: `Trending post from Anonymous lorem ipsum sit ament, consecuter est a, mattis tellus. Sed.`,
    read: true,
    duration: "3 Years",
  },
];
const NotificationsList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onMarkAsRead = () => {
    /**
     * @todo implement mark as read logic
     */
  };

  const onDeleteNotification = () => {
    /**
     * @todo implement delete notification logic
     */
  };
  const onNotificationTurnOff = () => {
    /**
     * @todo implement notification turn off logic
     */
  };
  const onViewSettingPress = () => {
    /**
     * @todo implement view setting logic
     */
  };

  return (
    <View>
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          onMarkAsRead={onMarkAsRead}
          title={notification.title}
          profileUrl={notification.profileUrl}
          content={notification.content}
          duration={notification.duration}
          read={notification.read}
          setIsVisible={setIsVisible}
        />
      ))}
      {isVisible && (
        <BottomSheet
          modalProps={{}}
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        >
          <NotificationActions
            onDeleteNotification={onDeleteNotification}
            onNotificationTurnOff={onNotificationTurnOff}
            onViewSettingPress={onViewSettingPress}
          />
        </BottomSheet>
      )}
    </View>
  );
};

export default NotificationsList;

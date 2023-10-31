import { Text, ScrollView, View } from "react-native";
import ProfileCard from "../../../components/Molecules/Cards/ProfileCard";
import ProfileInfo from "../../../components/Organisims/Profile/ProfileInfo";

const Profile = () => {
  return (
    <ScrollView style={{paddingHorizontal: 15}}>
      <View style={{marginTop: 50}}>
        <ProfileInfo />
      </View>
    </ScrollView>
  );
};

export default Profile;

import { View, Text, ScrollView } from "react-native";
import NotificationsList from "../../../components/Organisims/Notifications/NotificationsList";

const Notifications = ()=>{
    return(
        <ScrollView style={{padding:15}}>
            {/* <Text>Notifications</Text> */}
            <NotificationsList />
        </ScrollView>
    )
}

export default Notifications
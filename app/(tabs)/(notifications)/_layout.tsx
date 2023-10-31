import { Stack } from "expo-router"; 

const NotificationsLayout
 = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="notification-settings" options={{ headerTitle: 'Notification Settings', headerTitleAlign: 'center'}} />
        </Stack>
    )
}

export default NotificationsLayout


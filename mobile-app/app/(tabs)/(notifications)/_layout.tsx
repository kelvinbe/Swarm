import { Stack } from "expo-router"; 

export {ErrorBoundary} from "expo-router"

const NotificationsLayout
 = ()=>{
    return(
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="notification-settings" options={{ headerTitle: 'Notification Settings', headerTitleAlign: 'center'}} />
        </Stack>
    )
}

export default NotificationsLayout


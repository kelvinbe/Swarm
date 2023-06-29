import { Stack } from "expo-router"; 

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
  };

export {ErrorBoundary} from "expo-router"
const TopicsLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false}} />
            <Stack.Screen name="choose-topic" options={{presentation: 'modal'}} />
        </Stack>
    )
}

export default TopicsLayout

import { Stack } from "expo-router"; 

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
  };

export {ErrorBoundary} from "expo-router"
const SwarmsLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false}} />
            <Stack.Screen name="create-swarm" options={{presentation: 'modal'}} />
            <Stack.Screen name="swarm-details" options={{presentation: 'modal'}} />
            <Stack.Screen name="swarm-level" options={{presentation: 'modal'}} />
            <Stack.Screen name="swarm-results" options={{presentation: 'modal'}} />
        </Stack>
    )
}

export default SwarmsLayout

import { Stack } from "expo-router"; 

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
  };

export {ErrorBoundary} from "expo-router"

const ProfileLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} /> 
        </Stack>
    )
}

export default ProfileLayout


import { Stack } from "expo-router"; 

export {ErrorBoundary} from "expo-router"

const ProfileLayout = ()=>{
    return(
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{headerShown: false}} /> 
        </Stack>
    )
}

export default ProfileLayout


import { Stack } from "expo-router"; 

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
  };

export {ErrorBoundary} from "expo-router"

const HomeLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false,}} />
            <Stack.Screen name="categories" options={{presentation: 'modal'}} />
            <Stack.Screen name="choose-category" options={{presentation: 'modal'}} />
            <Stack.Screen name="questions" options={{presentation: 'modal'}} />          
        </Stack>
    )
}

export default HomeLayout

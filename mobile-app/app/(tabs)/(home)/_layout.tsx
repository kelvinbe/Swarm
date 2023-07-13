import { Stack } from "expo-router"; 

export {ErrorBoundary} from "expo-router"

const HomeLayout = ()=>{
    return(
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ headerShown: false,}} />
            <Stack.Screen name="categories" options={{ title: 'Choose Category'}} />                  
        </Stack>
    )
}

export default HomeLayout

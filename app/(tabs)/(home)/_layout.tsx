import { Stack } from "expo-router"; 

const HomeLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false,}} />
            <Stack.Screen name="categories" options={{ title: 'Choose Category'}} />                  
        </Stack>
    )
}

export default HomeLayout

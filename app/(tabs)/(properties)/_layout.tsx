import { Stack } from "expo-router"; 

const SwarmsLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false, }} />
            <Stack.Screen name="create-swarm" options={{presentation: 'modal'}} />
            <Stack.Screen name="swarm-details" options={{}} />
            <Stack.Screen name="swarm-level" options={{}} />
            <Stack.Screen name="swarm-results" options={{}} />
        </Stack>
    )
}

export default SwarmsLayout

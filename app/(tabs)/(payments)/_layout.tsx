import { Stack } from "expo-router"; 

const TopicsLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="payments" options={{ headerShown: false}} />
            <Stack.Screen name="choose-topic" options={{}} />
            <Stack.Screen name="questions" options={{}}/>
            <Stack.Screen name="select-topic" options={{}}/>
            <Stack.Screen name="question-details" options={{}}/>
            <Stack.Screen name="topic-list" options={{}}/>
            <Stack.Screen name="subscriptions" options={{}}/>
        </Stack>
    )
}

export default TopicsLayout

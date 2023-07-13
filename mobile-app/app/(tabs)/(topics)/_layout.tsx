import { Stack } from "expo-router"; 

export {ErrorBoundary} from "expo-router"
const TopicsLayout = ()=>{
    return(
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ headerShown: false}} />
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

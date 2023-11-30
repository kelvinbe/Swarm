import { Stack, useNavigation } from "expo-router"; 
import { useEffect } from 'react';




const HomeLayout = ()=>{

    const navigation = useNavigation();



    useEffect(() => { 
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            // Prevent default action
            e.preventDefault();
    
            // Add custom back button behavior here
            console.log('onback');
        });
    
        // Cleanup listener when component unmounts
        return unsubscribe;
    }, []);
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false,}} />
            <Stack.Screen name="categories" options={{ title: 'Choose Category'}} />                  
        </Stack>
    )
}

export default HomeLayout

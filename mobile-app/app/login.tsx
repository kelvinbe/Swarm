import React from "react";
import { Platform, Text, View } from 'react-native';
import {} from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = ()=>{
    return(
        <View>
            <Text style={{color: 'white'}}>Login Here</Text>
            <StatusBar style={Platform.OS==='ios'? 'light': 'auto'}/>
        </View>
    )
}

export default LoginScreen
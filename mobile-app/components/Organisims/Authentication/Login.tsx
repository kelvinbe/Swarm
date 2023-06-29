import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ActionButton from '../../Atoms/Buttons/ActionButton';
import Divider from '../../Atoms/Divider/Divider';

const Login = () => {
  const [email, setEmail] = React.useState('');

  const onContinueClick = ()=>{
    alert('Continue')
  }
  return (
    <ScrollView>
    <View style={{paddingBottom: 25}}>
        <Text style={{fontWeight: '600',}}>Enter your Email</Text>
        <TextInput 
          editable
          placeholder='Someone@example.com'
          onChangeText={text => setEmail(text)}
          style={{
            borderWidth: 1,
            borderColor: '#ADB5BD',
            borderRadius: 5,
            padding: 10,
            width: "100%"
          }}
        />
    </View>
    <View>
        <ActionButton onPress={onContinueClick} fullWidth>Continue</ActionButton>
        <Text style={{textAlign: 'center', paddingTop: 10, color: '#ADB5BD', fontSize: 12}}>Don't Have an Account? Set Up</Text>
    </View>
    <Divider>Or</Divider>
    </ScrollView>
  )
}

export default Login
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ActionButton from '../../Atoms/Buttons/ActionButton';
import Divider from '../../Atoms/Divider/Divider';
import { makeStyles, useTheme } from '@rneui/themed';
import ImageIconButton from '../../Atoms/Buttons/ImageIconButon';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const {theme} = useTheme()
  const styles = useStyles()
  const onContinueClick = ()=>{
    alert('Continue')
  }

  const onGoogleLogin = ()=>{
    alert('Login with Google')
    /**
     * @todo Implement login with google
     */
}
const onMicrosoftLogin = ()=>{
    alert('Login with Microsoft')
    /**
     * @todo Implement login with google
     */
}
const onFacebookLogin = ()=>{
    alert('Login with Facebook')
    /**
     * @todo Implement login with google
     */
}
const onAppleLogin = ()=>{
    alert('Login with Apple')
    /**
     * @todo Implement login with google
     */
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginStyles}>
        <View style={{paddingBottom: 25}}>
            <Text style={{fontWeight: '600',}}>Enter your Email</Text>
            <TextInput editable placeholder='Someone@example.com' onChangeText={text => setEmail(text)} style={styles.textInputStyles} />
        </View>
        <View>
            <ActionButton onPress={onContinueClick} fullWidth>Continue</ActionButton>
            <Text style={styles.textStyles}>Don't Have an Account? <Link href={'/register'} style={{color:theme.colors.primary}}>Sign Up</Link></Text>
        </View>
      </View>
      <View style={styles.divider}>
        <Divider>Or</Divider>
      </View>
      <View style={styles.socialLogins}>
        <ImageIconButton name='google' title='Continue With Google' onPress={onGoogleLogin}/>  
        <ImageIconButton name='microsoft' title='Continue With Microsoft' onPress={onMicrosoftLogin}/>  
        <ImageIconButton name='apple' title='Continue With Apple' onPress={onAppleLogin}/>  
        <ImageIconButton name='facebook' title='Continue With Facebook' onPress={onFacebookLogin}/>  
      </View>

    </ScrollView>
  )
}

export default Login

const useStyles=makeStyles((theme, props)=>({
  container: {
    gap: 10
  },
  textInputStyles:{
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  textStyles:{
    textAlign: 'center', 
    paddingTop: 10, 
    color: theme.colors.stroke, 
    fontSize: 12
  },
  socialLogins: {
    gap: 10,
    paddingVertical: 20
  },
  loginStyles: {
    marginVertical: 20,
  },
  divider:{
    paddingVertical: 10
  }
}))
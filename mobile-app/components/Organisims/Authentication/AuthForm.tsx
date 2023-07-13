import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ActionButton from '../../Atoms/Buttons/ActionButton';
import Divider from '../../Atoms/Divider/Divider';
import { makeStyles, useTheme } from '@rneui/themed';
import ImageIconButton from '../../Atoms/Buttons/ImageIconButon';
import { Link, useRouter } from 'expo-router';
import { isValidEmail } from '../../../utils';

interface IProps{
  state?: 'signup' | 'login'
}
const AuthForm = (props: IProps) => {
  const [email, setEmail] = React.useState('');
  const {theme} = useTheme();
  const {state} = props
  const styles = useStyles()
  const {push} = useRouter()
  const onContinueClick = ()=>{
    if(isValidEmail(email)){
      push('password')
    }else{
      /**
       * @todo implement invalid email notification
       */
    }
  }

  const onGoogleLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onMicrosoftLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onFacebookLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onAppleLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const navigateAuth = ()=>{
  if(state==='signup'){
      push('login')
  }else{
      push('register')
  }
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
            {state === "signup" ? (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Already have an account?
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Log In</Text>
          </Text>
        ) : (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Don't have an account?
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Sign Up</Text>
          </Text>
        )}
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

export default AuthForm

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
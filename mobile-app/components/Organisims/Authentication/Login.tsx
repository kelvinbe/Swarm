import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ActionButton from '../../Atoms/Buttons/ActionButton';
import Divider from '../../Atoms/Divider/Divider';
import { makeStyles } from '@rneui/themed';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const styles = useStyles()
  const onContinueClick = ()=>{
    alert('Continue')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingBottom: 25}}>
          <Text style={{fontWeight: '600',}}>Enter your Email</Text>
          <TextInput editable placeholder='Someone@example.com' onChangeText={text => setEmail(text)} style={styles.textInputStyles} />
      </View>
      <View>
          <ActionButton onPress={onContinueClick} fullWidth>Continue</ActionButton>
          <Text style={styles.textStyles}>Don't Have an Account? Set Up</Text>
      </View>
      <Divider>Or</Divider>
    </ScrollView>
  )
}

export default Login

const useStyles=makeStyles((theme, props)=>({
  container: {},
  textInputStyles:{
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 5,
    padding: 10,
    width: "100%"
  },
  textStyles:{
    textAlign: 'center', 
    paddingTop: 10, 
    color: theme.colors.stroke, 
    fontSize: 12
  },
  
}))
import { View, Text } from "react-native";
import BaseInput from "../../Atoms/Inputs/BaseInput";
import { useEffect, useReducer, useState } from "react";
import { makeStyles, useTheme } from "@rneui/themed";
import WithHelperText from "../../Atoms/Inputs/WithHelperText";
import { isValidEmail, isValidPassword } from "../../../utils";
import { Icon } from "@rneui/base";
import { Link, useRouter } from "expo-router";
import ActionButton from "../../Atoms/Buttons/ActionButton";

const hasLowercase = (str: string) => /[a-z]/.test(str);
const hasUppercase = (str: string) => /[A-Z]/.test(str);
const hasNumber = (str: string) => /\d/.test(str);
const hasSpecialCharacter = (str: string) => /[@$!%*?&]/.test(str);

interface IReducerState {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  editable: boolean;
  showPassword: boolean;
  emailValid: boolean;
  passwordValid: boolean;
}

const initialState: IReducerState = {
  email: "someone@example.com",
  password: "",
  loading: false,
  error: "",
  showPassword: false,
  emailValid: false,
  passwordValid: false,
  editable: false,
};

const reducer = (state: IReducerState, action: any) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        passwordValid: isValidPassword(action.payload),
      };
    case "SET_EDITABLE":
        return{
            ...state,
            editable: action.payload
        };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.payload,
      };
    case "SET_EMAIL_VALID":
      return {
        ...state,
        emailValid: action.payload,
      };
    case "SET_PASSWORD_VALID":
      return {
        ...state,
        passwordValid: action.payload,
      };
    default:
      return state;
  }
};

interface IProps{
    state: 'signup' | 'login';
}
const PasswordInput = (props: IProps) => {
  const {state} = props;
  const styles = useStyles();
  const {push} = useRouter()
  const [
    {
      password,
      passwordValid,
      email,
      emailValid,
      loading,
      error,
      showPassword,
      editable,
    }, 
    dispatchAction] = useReducer(reducer, initialState)
  const { theme } = useTheme();

  const toggleShowPassword = () => {
    dispatchAction({ type: "SET_SHOW_PASSWORD", payload: !showPassword });
  };

  const setPassword = (value: string) => {
    dispatchAction({ type: "SET_PASSWORD", payload: value });
  };

  const setEmail = (value: string) => {
    dispatchAction({ type: "SET_EMAIL", payload: value });
  };

  const enableEdit = ()=>{
    dispatchAction({type: 'SET_EDITABLE', payload: !editable})
  }

  const validatePassword = ()=>{
    dispatchAction({type: 'SET_PASSWORD_VALID', payload: isValidPassword(password)})
  }
  const navigateAuth = ()=>{
    if(state==='signup'){
        push('login')
    }else{
        push('register')
    }
  }

  const handleContinue = ()=>{
    validatePassword();
    if(state==='signup' && passwordValid){
        /**
         * @todo implement logic for continue
         */
        push('email-verification')
    }else if(state==='login'){
        /**
         * @todo implement logic for invalid password notification
         */
        push('(tabs)')
    }
    

  }
  return (
    <View style={{gap: 10}}>
      <View>
        <Text style={styles.textStyles}>Email Address</Text>
        <BaseInput disabled={!editable} value={email} 
            onChangeText={setEmail}
            rightIcon={ state==='signup'?{
                name: "edit",
                type: "feather",
                color: theme.colors.text,
                size: 18,
                onPress: enableEdit,
                style: {
                    display: "flex",
                    justifyContent: "center",
                },
                }: {}}
        />
      </View>
      <View>
        <Text style={styles.textStyles}>Email Address</Text>
        <WithHelperText
          rightIcon={{
            name: showPassword ? "eye-off" : "eye",
            type: "feather",
            color: theme.colors.text,
            size: 20,
            onPress: toggleShowPassword,
            style: {
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
            },
          }}
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          helperText={state==='signup'? (
            (password?.length > 0 && !passwordValid) ? <View style={styles.bottomHelperTextContainer}>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !(password.length >= 8) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !(password.length >= 8) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !(password.length >= 8) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least 8 characters long
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasNumber(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasNumber(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasNumber(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one number
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasLowercase(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasLowercase(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasLowercase(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one lowercase letter
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasUppercase(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasUppercase(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasUppercase(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one uppercase letter
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasSpecialCharacter(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasSpecialCharacter(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasSpecialCharacter(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one special character
                    </Text>
                </View>
            </View> : ""
          ): ''}
        />
        {state==='login' && <Link href={'/forgot-password'} style={{textAlign: 'right', color: theme.colors.grey3, }}>Forgot Password</Link>}
      </View>
      <View style={{paddingTop: 20}}>
        <ActionButton fullWidth onPress={handleContinue}>Continue</ActionButton>
        {state === "signup" ? (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Log In</Text>
          </Text>
        ) : (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Don't have an account?{" "}
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Sign Up</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default PasswordInput;


const useStyles = makeStyles((theme)=>({
    bottomHelperTextContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 1, 
        marginVertical: 10, 
        borderRadius: 8, 
        paddingVertical: 5, 
        gap: 5, 
        borderColor: theme.colors.stroke1
    },
    bottomHelperTextContainerA: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 5,
    },
    bottomHelperText: {
        fontSize: 14,
        fontWeight: "400", 
        fontStyle: 'normal',
    },
    textStyles: {
        color: theme.colors.text,
        fontWeight: '600'
    }
}))


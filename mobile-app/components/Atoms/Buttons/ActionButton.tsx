import React from "react";
import {View} from "react-native";
import {Button, ButtonProps} from "@rneui/base";
import { makeStyles } from "@rneui/themed";

interface Props {
  children?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: number | string;
}

const ActionButton = (props: Props & ButtonProps)=>{
    const {loading, children, disabled, onPress} = props

    const styles = useStyles(props)
    return(
        <View style={styles.containerStyle}>
            <Button 
              buttonStyle={styles.buttonStyle}
              title={children}
              disabled={disabled}
              loading={loading} 
              onPress={onPress}
            />
        </View>
    )
}

export default ActionButton 

const useStyles = makeStyles((theme, props:Props)=>({
    buttonStyle: {
        borderRadius: 10, 
        height: 50, 
        backgroundColor: '#006773',
        width: props.fullWidth ? '100%' : props.width ? props?.width: 350,
    },
    containerStyle: {
        width: props?.fullWidth ? '100%' : props?.width ? props?.width  : 'auto',
        elevation: 0,
    }
}))

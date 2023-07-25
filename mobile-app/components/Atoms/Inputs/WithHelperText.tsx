import { View } from 'react-native'
import React, { ReactNode } from 'react'
import { makeStyles, ThemeConsumer } from '@rneui/themed'
import { Input, InputProps, Text } from '@rneui/base'

interface IProps {
    fullWidth?: boolean;
    width?: number;
    helperText?: string | ReactNode; 
    helperOnPress?: () => void;
    container?: any
}

type Props = IProps & InputProps;

const useStyles = makeStyles((theme, props: Props)=> {
    return ({
        containerStyle: {
            borderWidth: 1,
            borderColor: theme.colors.stroke,
            borderRadius: 8,
            padding: 0,
            margin: 0,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "400", 
            color: theme.colors.grey3,
            width: props?.fullWidth ? "100%" : props?.width ? props.width : "auto",
            justifyContent: "center",
            
        },
        helperTextStyle: {
            fontSize: 14,
            lineHeight: 16,
            color: theme.colors.grey3,
            marginTop: 5,
            width: "100%",
            textAlign: "right",
            fontStyle: "italic",
            fontWeight: "500",

        },
        inputStyle: {
            borderWidth: 0,
            paddingVertical: 10,
            paddingHorizontal: 20,
            paddingLeft: 10,
            margin: 0,
            marginTop: 10,
            paddingTop: 5
        },
        inputContainerStyle: {
            borderBottomWidth: 0,
            margin: 0,
            marginTop: -2
        },
        style: {
            borderWidth: 0,
            margin: 0,
            padding: 0,
        },
        errorStyle: {
            height: 0,
            margin: 0
        },
        container: {
            width: props?.fullWidth ? "100%" : props?.width ? props.width : "auto",
        },
        labelStyle: {
            color: theme.colors.black,
            width: "100%",
            fontWeight: "700",
            fontSize: 16,
        }
    })
})

const WithHelperText = (props: Props) => {
    const styles = useStyles(props)
    const { fullWidth, width, helperText, helperOnPress, container, ref, ...rest } = props
  return (
    <ThemeConsumer>
        {({theme})=>(
            <View style={[styles.container, props.container]} >
                <Input
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.style}
                errorStyle={styles.errorStyle}
                containerStyle={[styles.containerStyle, props.containerStyle]}  
                inputStyle={[styles.inputStyle, props.inputStyle]} 
                placeholderTextColor={theme.colors.grey3}  
                underlineColorAndroid="transparent"
                labelStyle={[props.labelStyle, styles.labelStyle]}
                {...rest}
                />
                { typeof props?.helperText !== "string" ? props?.helperText : <Text onPress={helperOnPress} style={{
                    ...styles.helperTextStyle,
                }} >{helperText}</Text>}
            </View>
        )}
    </ThemeConsumer>
  )
}

export default WithHelperText

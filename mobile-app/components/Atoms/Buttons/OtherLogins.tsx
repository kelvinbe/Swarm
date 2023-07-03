import { makeStyles, Image } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";

interface Props {
    children?: string
}

const Image_Url = '../'
const OtherLogins = (props: Props) =>{
    const styles = useStyles(props)
    return(
        <View style={styles.iconButtonsContainer} >
                        <IconButton name="google" containerStyle={{
                            marginRight: Platform.OS === 'ios' ? 0 : 20
                        }} onPress={()=>googleLogin()} iconType='font-awesome' >
                            <GoogleIcon width={24} height={24} />
                        </IconButton>
                        {Platform.OS === 'ios' ? <IconButton shadow containerStyle={{
                            marginHorizontal: 10
                        }} name="apple" iconType='font-awesome' >
                            <AppleIcon fill="black" width={24} height={24} />
                        </IconButton> : null}
                        <IconButton onPress={()=>facebookLogin()} name="facebook" iconType='font-awesome' >
                            <FacebookIcon width={24} height={24} />
                        </IconButton>
                    </View>
    )
} 

export default OtherLogins 

const useStyles = makeStyles((theme, props: Props)=>({
    iconButtonsContainer: {

    },
    iconStyles: {

    },

}))
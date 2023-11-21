import { View } from "react-native";
import { Image } from "@rneui/base";
import { makeStyles } from "@rneui/themed";

interface IProps{
    width?: string | number;
    height?: string | number;
}
const Logo = (props: IProps) => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/appstore.png")}
        style={{ width: props.width?? 100, height: props.height?? 100, aspectRatio: 1 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

const useStyles = makeStyles((theme,)=>{
    return {
        container: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        }
    }
})
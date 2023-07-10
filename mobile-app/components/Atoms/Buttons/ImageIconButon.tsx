import { Text,Image, View, ImageSourcePropType } from "react-native";
import { Button, makeStyles } from "@rneui/themed";

interface Props {
    image: ImageSourcePropType;
    title: string;
    width?: number | string;
    onPress: ()=>void;
}

const ImageIconButton = (props: Props) => {
  const {image, title, onPress} =props
  const styles = useStyles(props);
  return (
    <Button buttonStyle={styles.buttonStyles} onPress={onPress} containerStyle={styles.containerStyle}>
      <View style={styles.imageViewStyles}>
        <Image
        style={styles.imageStyles}
        source={image}
        />
      </View>
      <View style={styles.textViewStyles}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
    </Button>
  );
};

export default ImageIconButton;

const useStyles = makeStyles((theme, props:Props) => ({
  buttonStyles: {
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    width: props.width? props?.width : "100%",
    flexDirection: "row",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor:theme.colors.background
  },
  textViewStyles: {
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignContent: 'flex-start', 
    paddingLeft: 10,
    width: "100%",
  },
  imageStyles: {
    width: 20,
    height: 20,
  }, 
  imageViewStyles: {
    borderWidth: 1, 
    borderColor: "#E5E5E5", 
    borderRadius:12,
    padding: 12,
  }, 
  containerStyle: {
    borderRadius: 8,
    elevation: 0,
    shadowOpacity: 0,
  },
  textStyles:{
    color: theme.colors.text
  }
}));

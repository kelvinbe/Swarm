import { View, Text } from "react-native";
import { Image, ImageProps } from "@rneui/base";
import { useEffect } from "react";

interface IProps {
  imageUrl?: string;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
}

const  ImageCard = (props: IProps) => {
  const { imageUrl, height, width, borderRadius } = props;


  useEffect(() => {
    
  }, [imageUrl])


  return (
    <View style={{marginLeft: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: imageUrl}}
        style={{
          width: width ? width : "100%",
          height: height ? height : 120,
          borderRadius: borderRadius ? borderRadius : 5, 
          aspectRatio: 1,
          justifyContent: 'center',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCard;

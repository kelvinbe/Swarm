import { View, Text } from "react-native";
import { Image, ImageProps } from "@rneui/base";

interface IProps {
  imageUrl: string;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
}

const ImageCard = (props: IProps) => {
  const { imageUrl, height, width, borderRadius } = props;
  return (
    <View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{
          width: width ? width : "100%",
          height: height ? height : 160,
          borderRadius: borderRadius ? borderRadius : 5,
          flex: 1,
          aspectRatio: 1,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageCard;

import { View, Text, TouchableOpacity } from "react-native";
import AvatarWithText from "../../Atoms/IconCards/AvatarWithText";
import { Divider, Icon } from "@rneui/base";
import { useState } from "react";
import { useTheme } from "@rneui/themed";

interface IProps{
    updateCommentStats: ()=>void;
    avatar: string;
    content: string;
}
const Comment = (props: IProps) => {
    const {updateCommentStats, content, avatar} = props
  const  [liked, setLiked] = useState<boolean>(false);
  const {theme} = useTheme();

  const handleLikeTap = ()=>{
    setLiked(!liked);
    updateCommentStats()
  }

  const handleReply =()=>{
    /**
     * @todo implement logic
     */
  }
  return (
    <View>
      <AvatarWithText content={content} avatar={avatar} />
      <View style={{display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingLeft: 20,
          }}>
      <View
        style={{
          width: 150,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity  onPress={handleLikeTap}>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Icon name={liked? 'heart':"hearto"} type="ant-design" size={18} color={liked? '#F44336': theme.colors.text}/>
            <Text>Like</Text>
          </View>
        </TouchableOpacity>
        <Divider orientation="vertical" width={1} />
        <View>
          <TouchableOpacity onPress={handleReply}>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
};

export default Comment;

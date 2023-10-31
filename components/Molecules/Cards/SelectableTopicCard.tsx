import { View, Text } from "react-native";
import SocialInteraction from "../Social/SocialInteraction";
import { CheckBox, Input } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import TextArea from "../../Atoms/Inputs/TextArea";
import { useState } from "react";

interface IProps{
    title: string;
    content: string;
    selected: boolean;
    onTopicSelect: ()=>void;
}
const SelectableTopicCard = (props: IProps) => {
  const styles = useStyles();
  const {title, content, selected, onTopicSelect,} = props;
  const [checked, setChecked] = useState<boolean>(selected)
  const {theme} = useTheme()

  const handleTopicSelect = ()=>{
    setChecked(!checked)
    onTopicSelect()
  }

  const onReactPress= ()=>{
    /**
     * @todo implement logic
     */
  };
  const onCommentPress= ()=>{
    /**
     * @todo implement logic
     */
  };
  const onSharePress= ()=>{
    /**
     * @todo implement logic
     */
  };
  return (
    <View style={styles.container}>
      <View style={{gap: 6}}>
        <CheckBox
          checked={checked}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon={"checkbox-blank-outline"}
          checkedColor={theme.colors.primary}
          size={35}
          title={title}
          textStyle={styles.textStyle}
          onPress={handleTopicSelect}
          containerStyle={{
            backgroundColor: "transparent",
            margin: 0,
            padding: 0,
            marginLeft: -3,
            paddingRight: 0,
          }}
        />
        <Text style={{textAlign: 'justify', lineHeight: 18, color: theme.colors.text}}>
         {content}
        </Text>
        {checked &&<TextArea placeholder="Type your comment here" onChangeText={(text)=>console.log(text)}/>}
      </View>
      <SocialInteraction handleReactions={onReactPress} handleComments={onCommentPress} handleShare={onSharePress} />
    </View>
  );
};

export default SelectableTopicCard;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background1,
    borderRadius: 10,
    paddingVertical: 10
  },
  textStyle: {
    fontWeight: "700",
    color: theme.colors.text,
    fontSize: 18,
    marginLeft: 5,
  },
}));

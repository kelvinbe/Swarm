import { ScrollView, View, } from "react-native";
import Question from "../../../components/Organisims/Questions/Question";
import { useTheme } from "@rneui/themed";

const QuestionDetails = ()=>{
    const {theme} = useTheme()
    return(
        <ScrollView style={{backgroundColor: theme.colors.background}}>
      <View style={{ padding: 10, gap: 4,  }}>
        <Question />
      </View>
    </ScrollView>
    )
}

export default QuestionDetails
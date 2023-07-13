import { View, Text, } from "react-native";
import BaseInput from "../../Atoms/Inputs/BaseInput";
import TextArea from "../../Atoms/Inputs/TextArea";
import ToggleField from "../../Atoms/Toggles/ToggleField";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const topics=[
    {label: "Select Category...", value: null},
    { label: "Footbal Prediction", value: "Footbal Prediction" },
    { label: "Sports", value: "Sports" },
    { label: "Finance", value: "Finance" },
    { label: "Monetization", value: "Monetization" },
]
const SwarmForm = ()=>{

    const {theme} = useTheme();
    const styles = useStyles();
    const [selectedTopic, setSelectedTopic] = useState()

    const handleVisibility=()=>{

    }
    const handleAwsMurkHumanInput=()=>{

    }
    const handleCreateSwarm=()=>{

    }
    const handleCancelSwarm=()=>{

    }
    return(
        <View style={styles.container}>
            <View>
              <Text style={styles.textStyles}>Swarm Title</Text>
              <BaseInput placeholder="Enter title here..."/>
            </View>   
            <View>
              <Text style={styles.textStyles}>Swarm Description</Text>
              <TextArea placeholder="Enter description here..."/>
            </View>   
            <View>
              <Text style={styles.textStyles}>Topic Category</Text>
              <View style={{borderWidth: 1, borderColor: theme.colors.stroke, borderRadius: 8}}>
                <Picker 
                  selectedValue={selectedTopic}
                  onValueChange={(value, index)=>setSelectedTopic(value)}  
                >
                    {topics.map((item, index)=>(
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    ))}
                </Picker>
              </View>
            </View>   
            <View>
              <Text style={styles.textStyles}>Visibility</Text>
              <ToggleField border padding onCheck={handleVisibility} title="Private"/>
            </View>
            <View>
              <Text style={styles.textStyles}>AWS Murk Human Input</Text>
              <ToggleField border padding onCheck={handleAwsMurkHumanInput}/>
            </View> 
            <View style={{gap: 10}}>
                <ActionButton fullWidth onPress={handleCreateSwarm}>Create Swarm</ActionButton>
                <ActionButton fullWidth backgroundColor={theme.colors.disabled} color={theme.colors.text} onPress={handleCancelSwarm}>Cancel</ActionButton>
            </View>       
        </View>
    )
}

export default SwarmForm

const useStyles = makeStyles((theme)=>({
    container: {
        gap: 10
    },
    textStyles:{
        fontSize: 16,
        fontWeight: '700',
    }
}))
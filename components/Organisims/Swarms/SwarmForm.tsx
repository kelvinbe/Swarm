import { View, Text, } from "react-native";
import BaseInput from "../../Atoms/Inputs/BaseInput";
import TextArea from "../../Atoms/Inputs/TextArea";
import ToggleField from "../../Atoms/Toggles/ToggleField";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { supabase } from "../../../lib/supabase";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


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
    const [selectedCategory, setCategory] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [clear, setClear] = useState(false)



    const handleCreateSwarm= async()=>{

      try {
      const {data, error} = await supabase.from('swarm').insert({title, description, category: selectedCategory})
        console.log('data added succsessfully')
        setTitle('')
        setDescription('')
        setCategory(null)
        setClear(true)
      
      if(error) console.log(error)
      } catch (error) {
        console.log(error)
      }
    }

    return(
        <View style={styles.container}>
            <View>
              <Text style={styles.textStyles}>Swarm Title</Text>
              <BaseInput clear={clear}  placeholder="Enter title here..." value={title} onChangeText={(value) => setTitle(value)}/>
            </View>   
            <View>
              <Text style={styles.textStyles}>Swarm Description</Text>
              <TextArea placeholder="Enter description here..." value={description} onChangeText={(value) => setDescription(value)}/>
            </View>   
            <View>
              <Text style={styles.textStyles}>Topic Category</Text>
              <View style={{borderWidth: 1, borderColor: theme.colors.stroke, borderRadius: 8}}>
                <Picker 
                  selectedValue={selectedCategory}
                  onValueChange={(value, index)=>setCategory(value)}  
                >
                    {topics.map((item, index)=>(
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    ))}
                </Picker>
              </View>
            </View>   
            <View style={{gap: 10}}>
                <ActionButton fullWidth onPress={handleCreateSwarm}>Create Swarm</ActionButton>
            </View>       
        </View>
    )
}

export default SwarmForm

const useStyles = makeStyles((theme)=>({
    container: {
        gap: 10,
        backgroundColor: theme.colors.background,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    textStyles:{
        fontSize: 16,
        fontWeight: '700',
    }
}))
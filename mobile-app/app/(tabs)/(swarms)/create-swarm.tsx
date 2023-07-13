import { ScrollView, Text } from "react-native";
import SwarmForm from "../../../components/Organisims/Swarms/SwarmForm";
import { useTheme } from "@rneui/themed";

const ChooseSwarm = ()=>{
    const {theme} = useTheme()
    return(
        <ScrollView style={{padding: 15, backgroundColor: theme.colors.background}}>
            <SwarmForm />
        </ScrollView>
    )
} 

export default ChooseSwarm
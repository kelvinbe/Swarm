import { useTheme } from "@rneui/themed";
import { View, Text, ScrollView } from "react-native"; 
import SwarmDetailsComponent from "../../../components/Organisims/Swarms/SwarmDetailsComponent";

const SwarmDetails = () =>{
    const {theme} = useTheme()
  return (
    <ScrollView style={{ paddingHorizontal: 15, backgroundColor: theme.colors.background}}>
      <SwarmDetailsComponent />
    </ScrollView>
  );
}

export default SwarmDetails
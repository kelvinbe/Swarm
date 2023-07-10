import { Text, ScrollView } from "react-native";
import SwarmDetailsCard from "../../../components/Molecules/Cards/SwarmDetailsCard";
import SwarmDetailsComponent from "../../../components/Organisims/Swarms/SwarmDetailsComponent";

const Swarms = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 15, }}>
      <Text>Swarms</Text>
      <SwarmDetailsComponent />
    </ScrollView>
  );
};

export default Swarms;

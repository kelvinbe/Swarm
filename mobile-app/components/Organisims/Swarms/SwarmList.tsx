import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";
import StatusTag from "../../Atoms/IconCards/StatusTag";

const swarms = [
  {
    id: "1",
    title: "Data Privacy and Security",
    status: 'Completed'
  },
  {
    id: "2",
    title: "Blockchain technology",
    status: 'Cancelled',
  },
  {
    id: "3",
    title: "Sustainable Agriculture",
    status: 'In Progress',
  },
  {
    id: "4",
    title: "Social Justice and Equality",
    status: 'In Progress',
  },
  {
    id: "5",
    title: "Cryptocurrency",
    status: 'Completed'
  },
  {
    id: "6",
    title: "Data Privacy and Security",
    status: 'Cancelled',
  },
  {
    id: "7",
    title: "Data Privacy and Security",
    status: 'Completed'
  },
];

const SwarmList = () => {
  const { theme } = useTheme();
  const styles = useStyles();

  const handleSwarmTap = () => {};
  return (
    <View style={styles.container}>
      {swarms.map((item, index) => (
        <TouchableOpacity key={index} onPress={handleSwarmTap}>
          <View style={styles.swarmStyles}>
            <Text style={{ color: theme.colors.text, fontWeight:'700' }}>{item.title}</Text>
            <StatusTag status={item.status}/>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SwarmList;

const useStyles = makeStyles((theme) => ({
  container: {
    gap: 5,
  },
  swarmStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
}));

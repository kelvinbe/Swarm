import { makeStyles } from "@rneui/themed";
import { View, Text } from "react-native";
import ToggleField from "../../Atoms/Toggles/ToggleField";
import ActionButton from "../../Atoms/Buttons/ActionButton";

interface IProps {
  handleCategoryFilter: () => void;
  handlePopularityFilter: () => void;
  handleRecencyFilter: () => void;
  handleTopicsFilter: () => void;
  handleSwarmLevelFilter: () => void;
  onDonePress: ()=>void;
}
const FilterCard = (props: IProps) => {
  const styles = useStyles();
  const {
    handleCategoryFilter,
    handlePopularityFilter,
    handleRecencyFilter,
    handleSwarmLevelFilter,
    handleTopicsFilter,
    onDonePress,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerStyles}>
        <Text style={[styles.textStyles, { fontSize: 20 }]}>Filter By</Text>
        <Text
          style={[
            styles.textStyles,
            { textDecorationLine: "underline", fontSize: 16 },
          ]}
        >
          Reset
        </Text>
      </View>
      <View style={styles.filterStyles}>
        <ToggleField onCheck={handleCategoryFilter} title="Cateogies" color="#000" bold />
        <ToggleField onCheck={handlePopularityFilter} title="Popularity" color="#000" bold/>
        <ToggleField onCheck={handleRecencyFilter} title="Recency" color="#000" bold />
        <ToggleField onCheck={handleTopicsFilter} title="Topics" color="#000" bold />
        <ToggleField onCheck={handleSwarmLevelFilter} title="Swarm Level" color="#000" bold/>
      </View>
      <ActionButton onPress={onDonePress} children={"Done"} fullWidth />
    </View>
  );
};

export default FilterCard;

const useStyles = makeStyles((theme, props) => ({
  container: {
    width: "100%",
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15,
    paddingBottom: 20,
  },
  headerStyles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 7,
    borderBottomColor: "#49505740",
  },
  filterStyles: {
    paddingBottom: 15,
  },
  textStyles: {
    fontWeight: "700",
    color: theme.colors.text
  },
}));

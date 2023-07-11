import { TouchableOpacity, View } from "react-native";
import InputWithIcon from "../../Atoms/Inputs/InputWithIcon";
import IconButton from "../../Atoms/Buttons/IconButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  setIsVisible?: (isVisible: boolean) => void;
  filterVisible?: boolean;
  searchVisible?: boolean;
  setSearch?: (search: string) => void;
}
const SearchAndFilter = (props: IProps) => {
  const { setIsVisible, searchVisible, filterVisible, setSearch } = props;
  const styles = useStyles();
  const { theme } = useTheme();
  const onFilterTap = () => {
    setIsVisible && setIsVisible(true);
  };
  return (
    <View style={styles.container}>
      {searchVisible && (
        <View style={{ width: !filterVisible ? "100%" : 250 }}>
          <InputWithIcon
            name="search"
            onChangeText={setSearch}
            placeholder="Search"
          />
        </View>
      )}
      {filterVisible && (
        <TouchableOpacity onPress={onFilterTap}>
          <View>
            <Ionicons
              name="filter-sharp"
              color={theme.colors.text}
              size={30}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchAndFilter;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

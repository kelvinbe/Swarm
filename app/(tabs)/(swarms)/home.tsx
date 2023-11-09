import { Text, ScrollView, View } from "react-native";
import { useTheme } from "@rneui/themed";
import SwarmList from "../../../components/Organisims/Swarms/SwarmList";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { useState } from "react";
import { BottomSheet } from "@rneui/base";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";

const Swarms = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCategoryFilter = () => {};
  const handlePopularityFilter = () => {};
  const handleRecencyFilter = () => {};
  const handleTopicsFilter = () => {};
  const handleSwarmLevelFilter = () => {};
  const onFilterApply = () => {
    setIsVisible(false);
    /**
     * @todo implement other logic here
     */
  };
  const onBackdropPress = () => {
    setIsVisible(false);
  };
  return (
    <ScrollView
      style={{
        paddingHorizontal: 15,
        backgroundColor: theme.colors.background,
      }}
    >
      <View style={{ gap: 10 }}>
        <SearchAndFilter
          searchVisible
          filterVisible
          setSearch={setSearch}
          setIsVisible={setIsVisible}
        />
        <SwarmList />
        <View style={{ marginTop: 20}}>
          <Text style={{fontSize: 20}}>Handle My Swarm Feature Coming soon...🥳</Text>
        </View>
      </View>
      <BottomSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
        <FilterCard
          handleCategoryFilter={handleCategoryFilter}
          handlePopularityFilter={handlePopularityFilter}
          handleRecencyFilter={handleRecencyFilter}
          handleTopicsFilter={handleTopicsFilter}
          handleSwarmLevelFilter={handleSwarmLevelFilter}
          onDonePress={onFilterApply}
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default Swarms;

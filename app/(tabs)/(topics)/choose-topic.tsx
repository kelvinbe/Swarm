import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import AvailableTopics from "../../../components/Organisims/Topics/AvailableTopics";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import { BottomSheet } from "@rneui/base";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { useTheme } from "@rneui/themed";




const ChooseTopic = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const {theme} = useTheme()
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
  const handleJoinTap = () => {};
  const onContinueTap = () => {};
  return (
    <ScrollView style={{ padding: 15, backgroundColor: theme.colors.background }}>
      <View style={{ paddingBottom: 20 }}>
        <SearchAndFilter
          searchVisible
          filterVisible
          setSearch={setSearch}
          setIsVisible={setIsVisible}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingVertical: 20,
          }}
        >
          <IconButton name="add" onPress={handleJoinTap} title="Join" />
        </View>
        <View>
          <AvailableTopics Topics={Topics} />
        </View>
        <View style={{ paddingTop: 40 }}>
          <ActionButton onPress={onContinueTap} fullWidth>
            Continue
          </ActionButton>
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
      </View>
    </ScrollView>
  );
};

export default ChooseTopic;

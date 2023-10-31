import { View, ScrollView, } from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme } from "@rneui/themed";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { BottomSheet } from "@rneui/base";
import TopicSummaryList from "../../../components/Organisims/Topics/TopicSummaryList";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { useState } from "react";

const HomeView = () => {
  const {theme} = useTheme()
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')

  const {push} = useRouter()
  const handleCategoryFilter = () => {};
  const handlePopularityFilter = () => {};
  const handleRecencyFilter = () => {};
  const handleTopicsFilter = () => {};
  const handleSwarmLevelFilter = () => {};
  const onFilterApply = () => {
    setIsVisible(false)
    /**
     * @todo implement other logic here
     */
  };
  const onBackdropPress=()=>{
    setIsVisible(false)
  }
  const handleCreateSwarm=()=>{
    push('/categories')
  }
  return (
    <ScrollView style={{backgroundColor: theme.colors.background, padding: 15}}>
      <View style={{ paddingBottom: 20 }}>
      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end', paddingBottom: 20}}>
        <IconButton name="add" onPress={handleCreateSwarm} title="Create Swarm"/> 
      </View>
        
        <SearchAndFilter filterVisible searchVisible setIsVisible={setIsVisible} setSearch={setSearch}/>
        <TopicSummaryList />
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

export default HomeView;
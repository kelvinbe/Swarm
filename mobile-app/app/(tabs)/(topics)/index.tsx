import { View, Text, ScrollView } from "react-native";
import AvailableTopics from "../../../components/Organisims/Topics/AvailableTopics";
import SelectableTopicCard from "../../../components/Molecules/Cards/SelectableTopicCard";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";
import TopicSummaryList from "../../../components/Organisims/Topics/TopicSummaryList";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { BottomSheet } from "@rneui/base";
import { useState } from "react";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import { Link } from "expo-router";
import TopicList from "./topic-list";


const Topics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')
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

  }
  const handleTopicSelect=()=>{

  }
  return (
    <ScrollView style={{ padding: 15, backgroundColor: "#fff" }}>
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

export default Topics;

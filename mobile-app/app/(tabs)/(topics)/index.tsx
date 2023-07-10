import { View, Text, ScrollView } from "react-native";
import AvailableTopics from "../../../components/Organisims/Topics/AvailableTopics";
import SelectableTopicCard from "../../../components/Molecules/Cards/SelectableTopicCard";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";
import TopicSummaryList from "../../../components/Organisims/Topics/TopicSummaryList";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { BottomSheet } from "@rneui/base";
import { useState } from "react";

const Topics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
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

  return (
    <ScrollView style={{ padding: 15, backgroundColor: "#fff" }}>
      <View style={{ paddingBottom: 20 }}>
        {/* <Text>Topics</Text> */}
        {/* <AvailableTopics /> */}
        {/* <SelectableTopicCard
        title="Sports and Entertainment"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga
          architecto voluptates ex culpa omnis ratione, reiciendis quo harum
          provident libero iusto commodi? Molestiae, amet deserunt. Deleniti at
          delectus commodi?"
        onTopicSelect={() => null}
        selected
      /> */}
        {/* <TopicCard
        title="Data Privacy and security"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga
        architecto voluptates ex culpa omnis ratione,"
        comments={78}
        views={"367k"}
        supporters={"57k"}
        duration="6 Days"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSAPGnkMMjJ36VHbe-DEabD5uufODlKCZ9A&usqp=CAU"
        onSeeCommentsPress={()=>null}
        onSupportersPress={()=>null}
        updateTopicStats={()=>null}
      /> */}

        <SearchAndFilter filterVisible searchVisible setIsVisible={setIsVisible}/>
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

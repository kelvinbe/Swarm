import { View, Text, ScrollView } from "react-native";
import AvailableTopics from "../../../components/Organisims/Topics/AvailableTopics";
import SelectableTopicCard from "../../../components/Molecules/Cards/SelectableTopicCard";
import TopicCard from "../../../components/Molecules/Cards/TopicCard";
import TopicSummaryList from "../../../components/Organisims/Topics/SummaryList";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { BottomSheet } from "@rneui/base";
import { useState } from "react";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import TopicList from "./topic-list";
import { useTheme } from "@rneui/themed";
import ModalScreen from "../../modal";
import DisplayCard from "../../../components/Molecules/Cards/DisplayCard";


const Topicss = [
  {
    id: 0,
    title: "Financial Prediction",
    checked: false,
    posts: 453,
    views: 83773,
  },
  {
    id: 1,
    title: "Environmental Issues",
    checked: false,
    posts: 490,
    views: 83773,
  },
  {
    id: 2,
    title: "Sports Prediction",
    checked: false,
    posts: 553,
    views: 83773,
  },
  {
    id: 3,
    title: "Product Recommendation",
    checked: false,
    posts: 353,
    views: 83773,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    checked: false,
    posts: 253,
    views: 83773,
  },
  {
    id: 5,
    title: "Educational Reforms",
    checked: false,
    posts: 653,
    views: 83773,
  },
];


const Topics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false)
  const {theme} = useTheme()
  const {push} = useRouter()
  const params = useLocalSearchParams();


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
  const handleJoinTap = () => {

    setModalVisible(!modalVisible)

  };
  const onContinueTap = () => {
    setModalVisible(!modalVisible)
    push('home')
  
};

const {cvv, cardNumber, expiryDate} = params



  return (
    <ScrollView style={{ padding: 15, backgroundColor: theme.colors.background }}>
      <View style={{ paddingBottom: 20 }}>

        <View>
          <DisplayCard cardNumber={cardNumber} cvv={cvv} expDate={expiryDate} amount={30000} status={'Paid'}/>
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

export default Topics;

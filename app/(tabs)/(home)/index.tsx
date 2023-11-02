import { View, ScrollView, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme, Skeleton,  } from "@rneui/themed";
import IconButton from "../../../components/Atoms/Buttons/IconButton";
import SearchAndFilter from "../../../components/Molecules/Topics/SearchAndFilter";
import { BottomSheet } from "@rneui/base";
import TopicSummaryList from "../../../components/Organisims/Topics/TopicSummaryList";
import FilterCard from "../../../components/Molecules/Cards/FilterCard";
import { useEffect, useState } from "react";
import SwarmForm from "../../../components/Organisims/Swarms/SwarmForm";
import axios from "axios";
import {NEWS_API_KEY} from '@env'




const HomeView = () => {
  const {theme} = useTheme()
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('Technology')
  const [swarmFormVisible, setSwarmFormVisible] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)



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
    // push('/categories')
    setSwarmFormVisible(true)
    setIsVisible(true)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search.length > 0 ? search : 'Technology'}&apiKey=${NEWS_API_KEY}`)
  
        const filteredData = response.data.articles.slice(80)
  
        setData(filteredData)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
  }
  
    fetchData()
  }, [search])

  console.log('search2222', search)

  return (
      <View style={{ padding: 15  }}>
      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end', paddingBottom: 20}}>
        <IconButton name="add" onPress={handleCreateSwarm} title="Create Swarm"/> 
      </View>
        
        <SearchAndFilter search={search} filterVisible searchVisible setIsVisible={setIsVisible} setSearch={setSearch}/>
    <ScrollView style={{backgroundColor: theme.colors.background, padding: 15}}>
       {loading ?(<View style={styles.loader}>
        <ActivityIndicator size={"large"} />
  </View>
) : <TopicSummaryList data={data} /> }
    </ScrollView>

        <BottomSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
        {!swarmFormVisible && <FilterCard
            handleCategoryFilter={handleCategoryFilter}
            handlePopularityFilter={handlePopularityFilter}
            handleRecencyFilter={handleRecencyFilter}
            handleTopicsFilter={handleTopicsFilter}
            handleSwarmLevelFilter={handleSwarmLevelFilter}
            onDonePress={onFilterApply}
          />}

        {swarmFormVisible && <SwarmForm />}
        </BottomSheet>
      </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
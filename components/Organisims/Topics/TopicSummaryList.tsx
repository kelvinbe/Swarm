import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";
import { GET_SWARM_ENDPOINT } from "../../../hooks/constants";
import { useEffect, useState } from "react";
import axios from "axios";


const TopicSummaryList = () => {
  const [data, setData] = useState([])


  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=Technology&apiKey=63d212fd7d4c44df9b9fcec889fc2fd3')

      const filteredData = response.data.articles.slice(50)
      console.log('res', filteredData)

      setData(filteredData)
    } catch (err) {
      console.log(err)
    }
}

  fetchData()
    
  }, [])

  return (
    <View>
        {data?.map((item, index)=>(
            <TopicSummaryListCard key={index} title={item.title} image={item.urlToImage}/>
        ))}
    </View>
  );
};

export default TopicSummaryList;

import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";
import { GET_SWARM_ENDPOINT } from "../../../hooks/constants";
import { useEffect, useState } from "react";
import axios from "axios";


interface IProps {
  data: {}[]
}


const TopicSummaryList = (props: IProps) => {

  const {data} = props
  useEffect(() => {


    
  }, [])

  return (
    <View style={{paddingBottom: 20}}>
        {data?.map((item, index)=>(
            <TopicSummaryListCard key={index} title={item.title} image={item.urlToImage}/>
        ))}
    </View>
  );
};

export default TopicSummaryList;

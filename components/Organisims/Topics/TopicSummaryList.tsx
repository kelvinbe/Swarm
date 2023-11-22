import { View } from "react-native";
import TopicSummaryListCard from "./TopicsSummaryListCard";
import { GET_SWARM_ENDPOINT } from "../../../hooks/constants";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  data: {}[];
}

const TopicSummaryList = (props: IProps) => {
  const { data } = props;
  useEffect(() => {}, []);

  return (
    <View style={{ paddingBottom: 80 }}>
      {data?.length > 0 &&
        data?.map((item, index) => (
          <TopicSummaryListCard
            key={index}
            description={item?.products?.brand_name}
            title={item?.status}
            image={item?.primary_photo?.href}
            baths={item?.description?.baths}
            family={item?.description?.type}
            price={300000}
            size={item?.description?.sqft}
            bedrooms={item.description.beds}
          />
        ))}
    </View>
  );
};

export default TopicSummaryList;

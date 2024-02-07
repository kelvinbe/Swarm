import { View } from "react-native";
import SummaryListCard from "./TopicsSummaryListCard";
import { GET_SWARM_ENDPOINT } from "../../../hooks/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { images } from "../../../data";

interface IProps {
  data: {}[];
}

const SummaryList = (props: IProps) => {
  const { data } = props;
  useEffect(() => {}, []);



  const newArr = data.map((item, index) => {

    let modifiedPhoto;

    const img = images[index]


      modifiedPhoto = {
        ...item.primary_photo,
        href: img?.imgUrl
      }



    return {
      ...item,
      primary_photo: modifiedPhoto
    }


  })
  

  // {item?.primary_photo?.href}


  return (
    <View testID="summary-list" style={{ paddingBottom: 80 }}>
      {data?.length > 0 &&
        newArr?.map((item, index) => {
        return <SummaryListCard
            key={index}
            description={item?.products?.brand_name}
            title={item?.status}
            image={item?.primary_photo?.href}
            baths={item?.description?.baths}
            family={item?.description?.type}
            price={300000}
            size={item?.description?.sqft}
            bedrooms={item?.description?.beds}
            propertyId={item?.property_id}
          />
})}
    </View>
  );
};

export default SummaryList;

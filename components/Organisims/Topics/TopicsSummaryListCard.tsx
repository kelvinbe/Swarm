import SummaryCard from "../../Molecules/Cards/SummaryCard";
import { makeStyles } from "@rneui/themed";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Link, useRouter } from "expo-router";
import _ from "lodash";
import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'


interface IProps {
  title: string;
  image: string;
  summary?: string;
  description: string;
  price: number;
  bedrooms: number;
  baths: number;
  size: number;
  family: string;
  propertyId: string;
}

const TopicSummaryListCard = (props: IProps) => {
  const {
    title,
    image,
    description,
    price,
    bedrooms,
    baths,
    size,
    family,
    propertyId,
  } = props;
  const styles = useStyles();
  const router = useRouter();

  const handleSeeAll = () => {};
  const onSummaryCardPress = () => {};

  const pass = { image, description, baths, bedrooms, price, propertyId };

  const toHome = () => {
    const isValidData = Object.values(pass).every(
      (value) => value !== undefined
    );

    if (isValidData) {
      router.push({ pathname: "/payments-track", params: pass });
    } else {
      console.error("Invalid data in pass object");
    }
  };

  return (
    <TouchableOpacity testID="single-summary-card"  onPress={toHome} style={styles.container}>
      <View>
        <SummaryCard
          imageUri={image}
          onPress={onSummaryCardPress}
          description={description}
          baths={baths}
          bedrooms={bedrooms}
          onPress={toHome}
          price={300000}
          propertyId={propertyId}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TopicSummaryListCard;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
  },
  headers: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 160,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  textStyles: {
    color: theme.colors.text,
  },
  icons: {
    flexDirection: "row",
  },
  iconText: {
    marginLeft: 10,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {},
}));

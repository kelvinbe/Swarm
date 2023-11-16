import { View, Text, TouchableOpacity } from "react-native";
import SummaryCard from "../../Molecules/Cards/SummaryCard";
import { makeStyles } from "@rneui/themed";
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { Rating, AirbnbRating } from 'react-native-ratings';



interface IProps {
  title: string;
  image: string;
  summary?: string;
  description: string;
  price: number;
  bedrooms: number;
  baths: number;
  size: number;
  family: string
}

const TopicSummaryListCard = (props: IProps) => {
  const { title, image, description, price, bedrooms, baths, size, family } = props;
  const styles = useStyles();

  const handleSeeAll = () => {};
  const onSummaryCardPress = () => {};

  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',     shadowRadius: 20,
    shadowColor: 'black'}}>
        <View style={styles.cards}>
            <SummaryCard
              imageUri={image}
              onPress={onSummaryCardPress}
            />
        </View>
        <View style={styles.headers}>
          <Text
          style={[styles.textStyles, {fontWeight: 'bold', fontSize: 15}]}>
            {description === 'essentials' ? 'Pent House Apartment': 'Bungalow House'}
           
            </Text>
          <TouchableOpacity onPress={handleSeeAll}>
            <View style={styles.textStyles}>
              <View style={styles.icons}>
              <Ionicons name="bed-outline" size={24} color="black" />    
              <Text style={styles.iconText}>{bedrooms === null ? 2 : bedrooms}</Text>
              </View>
              <View style={styles.icons}>
              <FontAwesome name="bathtub" size={24} color="black" />  
              <Text style={styles.iconText}>{baths}</Text>

              </View>
              <View style={styles.icons}>
              <MaterialCommunityIcons name="move-resize" size={24} color="black" /> 
              <Text style={styles.iconText}>{size} ft</Text>

              </View> 
              <View style={styles.icons}>
              <MaterialIcons name="family-restroom" size={24} color="black" /> 
              <Text style={styles.iconText}>{family}</Text>
              </View> 
              <View style={styles.rating} >
              <Rating 
            imageSize={25}/>
                </View> 
            </View>
          </TouchableOpacity>
        </View>
        </View>
        </View>
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
    marginLeft: -160,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    width: 300,
  },
  textStyles: {
    color: theme.colors.text
  },
  icons: {
    flexDirection: 'row'
  },
  iconText: {
    marginLeft: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  rating: {
    marginRight: 20
  }
}));

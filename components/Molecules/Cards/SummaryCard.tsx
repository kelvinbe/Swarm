import { View } from "../../Themed";
import { Text, TouchableOpacity } from "react-native";
import ImageCard from "../../Atoms/Images/ImageCard";
import { makeStyles, useTheme } from "@rneui/themed";
import _ from 'lodash';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { Rating, AirbnbRating } from '@rneui/themed';



interface Props {
    imageUri?: string;
    description?: string;
    bedrooms?: string;
    onPress: ()=>void;
    title: string;
    image: string;
    summary?: string;
    price: number;
    baths: number;
    size: number;
    family: string
}

const  SummaryCard = (props: Props) => {
  const {imageUri, description, bedrooms,baths, onPress} = props;
  const {theme}= useTheme();
  const styles = useStyles()

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={{ height: "auto", gap: 5, flexDirection: 'row'}}>
      <View>
        <ImageCard height={100} width={130} imageUrl={imageUri} borderRadius={30}/>
      </View>
      <View style={styles.headers}>
          <Text
          style={[styles.textStyles, {fontWeight: 'bold', fontSize: 15}]}>
            {description === 'essentials' ? 'Pent House Apartment': 'Bungalow House'}
            </Text>
            <View style={styles.textStyles}>
              <View style={styles.icons}>
              <Ionicons name="bed-outline" size={24} color="black" />    
              <Text style={styles.iconText}>{_.isUndefined(bedrooms) ? 2 : bedrooms}</Text>
              </View>
              <View style={styles.icons}>
              <FontAwesome name="bathtub" size={24} color="black" />  
              <Text style={styles.iconText}>{baths}</Text>
              </View>
              <View style={styles.rating} >
              <AirbnbRating
                size={10}
                reviewSize={15}
                ratingContainerStyle={{marginTop: 0}}
                />

          </View> 
            </View>
        </View>
    </View>
    </TouchableOpacity>
  );
};

export default SummaryCard;

const useStyles = makeStyles((theme)=>({
  container:{
    padding: 0,
    margin: 0,
    width: "100%",
    borderTopLeftRadius: 29, 
    borderTopRightRadius: 10, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    backgroundColor: "#007BFF", 
    borderLeftWidth:0,
    borderRightWidth:0,
    shadowColor: "darkgrey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    borderWidth: 1,
    borderColor: "darkgrey",
  },
  headers: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
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
  }
}))
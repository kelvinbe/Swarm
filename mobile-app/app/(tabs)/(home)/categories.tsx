import { ScrollView, View } from "react-native";
import CategoryIconCard from "../../../components/Atoms/IconCards/CategoryIconCard";

const categories = [
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
];
const Categories = () => {
  return (
    <ScrollView style={{padding: 15}}>
      <View style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
          {categories.map((item, index) => (
            <View key={index} style={{width: '30%'}}>
            <CategoryIconCard
              title={item.name}
              onPress={() => alert("This is an Icon cardd")}
              image={item.image}
            />
            </View>
          ))}
        </View>
    </ScrollView>
  );
};

export default Categories;

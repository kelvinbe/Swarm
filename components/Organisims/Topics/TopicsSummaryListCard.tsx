import { View, Text, TouchableOpacity } from "react-native";
import SummaryCard from "../../Molecules/Cards/SummaryCard";
import { makeStyles } from "@rneui/themed";

interface IProps {
  title: string;
  image: string;
  summary: string;
}

const TopicSummaryListCard = (props: IProps) => {
  const { title, image } = props;
  const styles = useStyles();

  const handleSeeAll = () => {};
  const onSummaryCardPress = () => {};

  return (
      <View style={styles.container}>

        <View style={styles.cards}>
            <SummaryCard
              imageUri={image}
              onPress={onSummaryCardPress}
            />
        </View>
        <View style={styles.headers}>
          <Text
          style={[styles.textStyles, {fontWeight: '600', width: 300}]}>{title}</Text>
          <TouchableOpacity onPress={handleSeeAll}>
            <Text style={styles.textStyles}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default TopicSummaryListCard;

const useStyles = makeStyles((theme) => ({
  container: {    
    marginTop: 20
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,  
    width: '100%',
  },
  textStyles: {
    color: theme.colors.text
  }
}));

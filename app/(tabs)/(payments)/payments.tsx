import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import ActionButton from "../../../components/Atoms/Buttons/ActionButton";
import {  useRouter, useLocalSearchParams } from "expo-router";
import { useTheme, makeStyles } from "@rneui/themed";
import DisplayCard from "../../../components/Molecules/Cards/DisplayCard";
import Charts from "../../../components/Organisims/Charts/Charts";
import React from 'react'


const Topicss = [
  {
    id: 0,
    title: "Financial Prediction",
    checked: false,
    posts: 453,
    views: 83773,
  },
  {
    id: 1,
    title: "Environmental Issues",
    checked: false,
    posts: 490,
    views: 83773,
  },
  {
    id: 2,
    title: "Sports Prediction",
    checked: false,
    posts: 553,
    views: 83773,
  },
  {
    id: 3,
    title: "Product Recommendation",
    checked: false,
    posts: 353,
    views: 83773,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    checked: false,
    posts: 253,
    views: 83773,
  },
  {
    id: 5,
    title: "Educational Reforms",
    checked: false,
    posts: 653,
    views: 83773,
  },
];


const Topics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false)
  const {theme} = useTheme()
  const {push} = useRouter()
  const params = useLocalSearchParams();
  const styles = useStyles();



  const handleCategoryFilter = () => {};
  const handlePopularityFilter = () => {};
  const handleRecencyFilter = () => {};
  const handleTopicsFilter = () => {};
  const handleSwarmLevelFilter = () => {};
  const onFilterApply = () => {
    setIsVisible(false);
    /**
     * @todo implement other logic here
     */
  };
  const onBackdropPress = () => {
    setIsVisible(false);
  };
  const handleJoinTap = () => {

    setModalVisible(!modalVisible)

  };
  const onContinueTap = () => {
    setModalVisible(!modalVisible)
    push('home')
  
};

const {cvv, cardNumber, expiryDate} = params



  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 20 }}>

      {cvv === undefined ?<><Text>You dont have any payments.</Text><Text> Click on a property and make a payment</Text></> : (<><View>
          <DisplayCard cardNumber={cardNumber} cvv={cvv} expDate={expiryDate} amount={30000} status={'Paid'} />
        </View>

        <View>
        <Charts />
        </View>
        
        <View style={styles.buttonStyles}>
            <ActionButton onPress={onContinueTap} fullWidth>
              Continue
            </ActionButton>
          </View></>)}
      </View>
    </ScrollView>
  );
};

export default Topics;


const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15, 
    backgroundColor: theme.colors.background,
    flex: 1

  },
  charts: {
    flex: 2

  },
  buttonStyles: {
    paddingTop: 40,
    flex: 1
  }



}))

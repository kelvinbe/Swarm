import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchAndFilter from '../../../components/Molecules/Topics/SearchAndFilter';
import { useTheme } from "@rneui/themed";
import { useState } from "react";
import { Button } from "@rneui/base";
import Animated, { withTiming } from 'react-native-reanimated';
import { useSharedValue, withSpring, useAnimatedStyle, useAnimatedProps } from 'react-native-reanimated';
import { transform } from 'lodash';
import { images } from '../../../data';

// Sample data for the cards
const miniCardsData = [
  { id: '1', icon: 'random', text: 'Rent' },
  { id: '2', icon: 'money', text: 'Buy' },
  { id: '3', icon: 'sellsy', text: 'Sell' },
];





const Swarms = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const r = useSharedValue(20)


  const handlePress = () => {
    r.value += 10;
  };



  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value)
  }))

  
  return (
    <ScrollView style={styles.container}>
      <View>
        <SearchAndFilter searchVisible filterVisible />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {miniCardsData.map(card => (
          <View style={styles.miniCardsData}  key={card.id}>
            <FontAwesome name={card.icon} size={24} />
            <Text style={{padding: 5}}>{card.text}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.headerText} >Popular Near You</Text>
      <FlatList
        horizontal
        data={images}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View  style={styles.imageCard}>
            <Image source={{uri: item.imgUrl}} style={{ width: 140, height: 150, borderRadius: 10 }} />
            <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }}>
              <FontAwesome name="heart" size={16} color="red" />
            </TouchableOpacity>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      {/* Curated For You */}
      <Text style={styles.headerText}>Curated For You</Text>
      <FlatList
        horizontal
        data={images}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.imageCard}>
            <Image source={{uri: item.imgUrl}} style={{ width: 140, height: 150, borderRadius: 10 }} />
            <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }}>
              <FontAwesome name="heart" size={16} color="red" />
            </TouchableOpacity>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      {/* Recommended For You */}
      <Text style={styles.headerText}>Recommended For You</Text>
      <FlatList
        data={images}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.recommendedFor}>
            <Image source={{uri: item.imgUrl}} style={{ width: 140, height: 125, borderRadius: 10 }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  )
  
};

export default Swarms;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: 'white'

  },

  box: {
    width: 120,
    height: 125,
    backgroundColor: 'violet',
    borderRadius: 20,
    marginVertical: 50
  }, 
  svg: {
    height: 250,
    width: '100%',
  },
  miniCardsData: {
    width: 120,
    height: 40,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  imageCard: {
    margin: 10,
    flexDirection: 'column',
    width: 140,
    height: 170,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  recommendedFor: {
      margin: 10,
      flexDirection: 'row',
      width: 370,
      height: 130,
      borderWidth: 2,
      borderRadius: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
    }
  

})

import React from 'react';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import SearchAndFilter from '../../../components/Molecules/Topics/SearchAndFilter';
import { useTheme } from "@rneui/themed";
import { useState } from "react";
import { Button } from "@rneui/base";
import Animated, { withTiming } from 'react-native-reanimated';
import { useSharedValue, withSpring, useAnimatedStyle, useAnimatedProps } from 'react-native-reanimated';
import { transform } from 'lodash';
import { images } from '../../../data';
import PriceCard from '../../../components/Molecules/Cards/PriceCard';

// Sample data for the cards
const miniCardsData = [
  { id: '1', icon: 'random', text: 'Rent' },
  { id: '2', icon: 'money', text: 'Buy' },
  { id: '3', icon: 'sellsy', text: 'Sell' },
];

const { width } = Dimensions.get('window');




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
  }));

  const renderListItem = ({ item, index }) => {
    if (index === 0) {
      // Render "Popular Near You" section
      return (
        <>
          <Text style={styles.headerText}>Popular Near You</Text>
          <FlatList
            horizontal
            data={item.data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.imageCard}>
                <Image source={{ uri: item.imgUrl }} style={{ width: 140, height: 100, borderRadius: 10, marginTop: -40 }} />
                <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }}>
                  <FontAwesome name="heart" size={16} color="red" />
                </TouchableOpacity>
                <PriceCard images={item.data} title={item.title} />
              </View>
            )}
          />
        </>
      );
    } else if (index === 1) {
      // Render "Curated For You" section
      return (
        <>
          <Text style={styles.headerText}>Curated For You</Text>
          <FlatList
            horizontal
            data={item.data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.imageCard}>
                <Image source={{ uri: item.imgUrl }} style={{ width: 140, height: 100, borderRadius: 10, marginTop: -40 }} />
                <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5 }}>
                  <FontAwesome name="heart" size={16} color="red" />
                </TouchableOpacity>
                <PriceCard title={item.title} />
              </View>
            )}
          />
        </>
      );
    } else {
      // Render "Recommended For You" section
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <View style={styles.containerFull}>
      <View>
        <SearchAndFilter searchVisible filterVisible />
      </View>
    
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {miniCardsData.map(card => (
          <View style={styles.miniCardsData}  key={card.id}>
            <FontAwesome color={'white'} name={card.icon} size={24} />
            <Text  style={styles.text}>{card.text}</Text>
          </View>
        ))}
      </View>
      <ScrollView>
      <FlatList
        data={[
          { type: 'popular', data: images },
          { type: 'curated', data: images },
          { type: 'recommended', data: images },
        ]}
        keyExtractor={(item, index) => item.type + index.toString()}
        renderItem={renderListItem}
        contentContainerStyle={styles.container}
      />
      </ScrollView>
    </View>
  );
};

export default Swarms;


const styles = StyleSheet.create({

  containerFull: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    paddingBottom: 20
  },

  
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20
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
    width: 110,
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CB4EE',
    shadowRadius: 15,
    shadowOffset: {width: 15, height: 15},
    shadowOpacity: 5

  },
  text: {
    color: 'white',
    padding: 5

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
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowRadius: 15,
    shadowOffset: {width: 15, height: 15},
    shadowOpacity: 5
    
  },
  recommendedFor: {
      margin: 10,
      flexDirection: 'row',
      width: width - 50, // Adjust the value as needed
      height: 130,
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    textIcon: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }

  

})

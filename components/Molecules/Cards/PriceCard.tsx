import React from 'react'
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const PriceCard = ({images,title}) => {
  return (
    <View style={{padding: 5}}>
            <View style={styles.textIcon}>
            <Text>{title.slice(0,12)}</Text>
            <Ionicons name="star" size={22} color="yellow" />

            </View>
            <View style={styles.textIcon}>
            <Ionicons style={{marginLeft: -4}} name='location' size={16} />
            <Text>California Bay</Text>  
            </View>
            <View>
            <Text style={{color: '#007FFF', marginTop: 5}}>$750</Text>

            </View>
    </View>
  )
}

export default PriceCard



const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      padding: 15,
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
      width: 110,
      height: 40,
      flexDirection: 'row',
      borderWidth: 2,
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
        width: 340,
        height: 130,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      textIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 3,
      }
  
    
  
  })
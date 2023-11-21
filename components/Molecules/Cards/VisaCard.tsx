// VisaCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VisaCard = ({ cardNumber, expiryDate, cardHolderName }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Card Logo */}
      <Image
        source={require('../../../assets/images/image.png')} // Replace with the actual path to your Visa logo
        style={styles.cardLogo}
      />

      {/* Card Number */}
      <Text style={styles.cardNumber}>Acc: {cardNumber}</Text>

      {/* Expiry Date */}
      <Text style={styles.expiryDate}>Exp: {expiryDate}</Text>

      {/* Card Holder Name */}
      <Text style={styles.cardHolderName}>Cvv: {cardHolderName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#4CAF50', // Replace with your card background color
    borderRadius: 10,
    width: '100%',
  },
  cardLogo: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  expiryDate: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  cardHolderName: {
    fontSize: 16,
    color: 'white',
  },
});

export default VisaCard;

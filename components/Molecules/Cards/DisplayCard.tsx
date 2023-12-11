import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayCard = ({ cardNumber, cvv, expDate, amount, status }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Card Number: {cardNumber}</Text>
      <Text style={styles.cardText}>CVV: {cvv}</Text>
      <Text style={styles.cardText}>Expiration Date: {expDate}</Text>
      <Text style={styles.cardText}>Amount Paid: {amount}</Text>
      <Text style={styles.cardText}>Status: {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    margin: 8,
    backgroundColor: 'lightgray', // Dark Green Color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: 'black', // White text color
    marginBottom: 8,
    fontWeight: 'bold'
  }
});

export default DisplayCard;

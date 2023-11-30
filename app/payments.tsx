// PaymentPage.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, ScrollView, ActivityIndicator } from 'react-native';
import VisaCard from '../components/Molecules/Cards/VisaCard';
import { makeStyles } from "@rneui/themed";
import { useFonts, Lato_700Bold } from '@expo-google-fonts/lato';
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import TopicSummaryListCard from '../components/Organisims/Topics/TopicsSummaryListCard';
import { Image, ImageProps } from "@rneui/base";
import CarouselCards from '../components/Organisims/Carousel/CarouselCards';
import axios from 'axios';
import { PEXEL_API_KEY } from "@env";
import { BottomSheet } from "@rneui/base";
import PaymentDetailsCard from '../components/Molecules/Cards/PaymentDetailsCard';





const Payments = () => {
  // State to hold the card details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardHolderName, setCardHolderName] = useState("John Doe")
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const styles = useStyles();
  const params = useLocalSearchParams();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const maxLength = 16; // Set your desired maximum length
  const separatorLength = 4; // Set the length after which you want to insert a space
  const [isVisible, setIsVisible] = useState(false)


  const { description, baths, price, image, bedrooms, propertyId } = params;


  // Check if the font is loaded before rendering the component
  // Function to handle payment
  const handlePayment = () => {
    // Add your payment logic here

    if(cvv !== '' && expiryDate !== '' && cardNumber !== ''){
    setIsVisible(true)

    }else{
      return
    }

  };
  useEffect(() => {
    // Add keyboard event listeners
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    // Cleanup the listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleInputChange = (text: string) => {
    // Remove spaces and limit length
    const sanitizedText = text.replace(/\s/g, '').slice(0, maxLength);

    // Insert spaces after a certain length
    const separatedText = sanitizedText.replace(
      new RegExp(`(.{${separatorLength}})`, 'g'),
      '$1 '
    );

    setCardNumber(separatedText);
  };


  const handleExpiryDateChange = (text: string) => {
    // Assuming MM/YY format
    const maxLength = 5;
    const sanitizedText = text.replace(/\s/g, '').slice(0, maxLength);
  
    if (sanitizedText.length <= 2) {
      // If the length is 2 or less, no need to insert a slash
      setExpiryDate(sanitizedText);
    } else {
      // If the length is more than 2, insert a slash after the second character only if it doesn't already exist
      let separatedText = sanitizedText;
      if (sanitizedText[2] !== '/') {
        separatedText = sanitizedText.slice(0, 2) + '/' + sanitizedText.slice(2);
      }
      setExpiryDate(separatedText);
    }
};
  const handleCVVChange = (text: string) => {
    // Implement similar logic for CVV
    const maxLength = 3;
    const sanitizedText = text.replace(/\s/g, '').slice(0, maxLength);
    setCVV(sanitizedText);
  };

  const onBackdropPress = () => {
    setIsVisible(false);
  };


  useEffect(() => {
    const fetchImages = async () => {
      const API_KEY = PEXEL_API_KEY ;
      const apiUrl = `https://api.pexels.com/v1/search?query=house%20interior&per_page=10`;
      try {
        setLoading(true)
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: API_KEY,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          const fetchedImages = data.photos;
          setImages(fetchedImages);
          setLoading(false)
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [propertyId]); 



  return (
    <KeyboardAvoidingView  
    style={{ flex: 1 }}
    behavior="padding"
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView>
    <View testID='payments-page' style={styles.container}>
    <View style={{flex: 1}}>
      <Text style={styles.headerText}>Purchase Property</Text>
    </View>
  {loading ? <ActivityIndicator size={"large"} /> :
  <View style={{flex: 4}}>
    <CarouselCards  data={images}/>
    </View>}
      <View style={styles.cardContainer}>
        <View>
      </View>
      <View>
        <Text style={styles.descriptionText}>Description : {description === 'essentials' ? 'Pent House Apartment': 'Bungalow House'}</Text>
        <Text style={styles.descriptionText}>Baths: {baths}</Text>
        <Text style={styles.descriptionText}>Bedrooms: {bedrooms}</Text>
        <Text style={styles.descriptionText}>Price: {price}</Text>
      </View>
      </View>
      <View style={styles.formContainer}>
      <View>
      <Text style={styles.cardText}>Add Card Details</Text>
    </View>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => handleInputChange(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Expiry Date (MM/YY)"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={(text) => handleExpiryDateChange(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={(text) => handleCVVChange(text)}
        />
      </View>
      <View style={styles.visaContainer}>
    {isKeyboardOpen === false && <VisaCard
        cardNumber={cardNumber}
        expiryDate={expiryDate}
        cardHolderName={cvv}
        /> }
      </View>
  {isKeyboardOpen === false &&<TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity> }
    </View>
    </ScrollView>
    <BottomSheet  backdropStyle={styles.bottomSheet}  isVisible={isVisible} onBackdropPress={onBackdropPress}>
          <PaymentDetailsCard
            cvv={cvv}
            accountNumber={cardNumber}
            expiryDate={expiryDate}
            price={300000}
          />
        </BottomSheet>
    </KeyboardAvoidingView>
    );
};

// (Remaining part of your styles)

export default Payments;

const useStyles = makeStyles((theme) =>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.colors.background
  },
  button: {
    backgroundColor: '#4A74EA',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 2,
    width: '100%',
    marginBottom: 30,
    marginTop: -10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 24, 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  visaContainer: {
    flex: 3,
    width: '100%',
    marginTop: 20
  },
  buttonContainer : {
    flex: 4
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 10
  },
  descriptionText: {
    fontWeight: 'bold'
  },  
  cardText: {
    fontSize: 20, 
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSheet: {
    height: '50%'
  }
}));

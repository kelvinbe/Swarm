import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { supabase } from "../../../lib/supabase";

const PaymentDetailsCard = ({ cardNumber, expiryDate, cvv, price }) => {
  // Assuming VAT is 15%
  const vatRate = 0.15;
  const vatAmount = price * vatRate;
  const totalAmount = price + vatAmount;

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handlePayment = async () => {
    setIsLoading(true);
    // try {
    //   const { data, error } = await supabase
    //     .from("swarm")
    //     .insert({ cardNumber, expiryDate, cvv });
    //   console.log("data added succsessfully");
    //   if (error) console.log(error);
    // } catch (error) {
    //   console.log(error);
    // }

    const pass = { cardNumber, expiryDate, cvv, price };

    setTimeout(() => {
      setIsLoading(false);
      router.push({ pathname: "/topics", params: pass });
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Account Number:</Text>
          <Text style={styles.value}>{cardNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Expiry Date:</Text>
          <Text style={styles.value}>{expiryDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>CVV:</Text>
          <Text style={styles.value}>{cvv}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>VAT (15%):</Text>
          <Text style={styles.value}>${vatAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={[styles.label, styles.totalLabel]}>Total:</Text>
          <Text style={[styles.value, styles.totalValue]}>
            ${totalAmount.toFixed(2)}
          </Text>
        </View>

        <ScrollView>
          <View testID="payments-page" style={styles.container}>
            {/* ... (previous code) */}
            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
              {isLoading ? (
                <ActivityIndicator size={"large"} />
              ) : (
                <Text style={styles.payButtonText}>Pay</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* ... (previous code) */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  totalLabel: {
    fontWeight: "bold",
  },
  totalValue: {
    color: "green",
  },
  payButton: {
    backgroundColor: "#4A74EA",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PaymentDetailsCard;

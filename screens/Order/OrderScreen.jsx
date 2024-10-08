import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { styles } from './OrderScreen.style.js';

const OrderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order Screen</Text>
      <Button title="Place Order" onPress={() => navigation.goBack()} />
    </View>
  );
}



export default OrderScreen;
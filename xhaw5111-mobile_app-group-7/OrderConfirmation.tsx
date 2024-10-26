// OrderConfirmation.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';

const OrderConfirmation = ({ navigation }) => {
  const { cartItems, calculateTotal } = useCart();
  const { total, discount, finalTotal } = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <ScrollView style={styles.scrollContainer}>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.courseImagePlaceholder}>
              <Text style={styles.imageText}>Image Placeholder</Text>
            </View>
            <Text>{item.name}</Text>
            <Text style={styles.priceText}>Price: {item.price}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.discountText}>Discount: {discount}</Text>
        <Text style={styles.priceText}>Total: {total}</Text>
        <Text style={styles.finalTotalText}>Final Total: {finalTotal}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ExploreCourses')}>
        <Text style={styles.backButtonText}>Back to Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F5F5F5', flex: 1 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#A52A2A' }, // Same red for title
  scrollContainer: { flexGrow: 1, marginBottom: 20 },
  itemContainer: { marginBottom: 10 },
  courseImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  imageText: { color: '#808080' },
  summaryContainer: { marginTop: 20, backgroundColor: '#FFC0CB', padding: 16 },
  discountText: { color: 'black' },
  priceText: { color: '#A52A2A' }, // Same red for price text
  finalTotalText: { fontWeight: 'bold', color: '#A52A2A' }, // Same red for final total
  backButton: {
    backgroundColor: '#A52A2A',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default OrderConfirmation;

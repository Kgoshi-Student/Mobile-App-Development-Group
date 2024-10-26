// Cart.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';

const Cart = ({ navigation }) => {
  const { cartItems, clearCart, confirmOrder, calculateTotal } = useCart();
  const { total, discount, finalTotal } = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <ScrollView style={styles.scrollContainer}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyMessage}>Nothing to see here!</Text>
        ) : (
          cartItems.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.courseImagePlaceholder}>
                <Text style={styles.imageText}>Image Placeholder</Text>
              </View>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.priceText}>Price: {item.price}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total: {total}</Text>
        <Text style={styles.summaryText}>Discount: {discount}</Text>
        <Text style={styles.summaryText}>Final Total: {finalTotal}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { clearCart(); }}>
          <Text style={styles.buttonText}>Clear Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            confirmOrder();
            navigation.navigate('OrderConfirmation');
          }}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  scrollContainer: { marginBottom: 20 },
  emptyMessage: { textAlign: 'center', marginTop: 20 },
  itemContainer: { 
    marginBottom: 12, 
    backgroundColor: '#FFFFFF', 
    padding: 10, 
    borderRadius: 8, 
    elevation: 2 
  },
  courseImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  imageText: { color: '#808080' },
  courseName: { fontSize: 18, fontWeight: 'bold' },
  priceText: { color: '#A52A2A' },
  summaryContainer: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 16 
  },
  summaryText: { 
    fontSize: 18, 
    color: '#A52A2A', 
    fontWeight: 'bold' 
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  button: { 
    flex: 1, 
    backgroundColor: '#A52A2A', 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginHorizontal: 4 
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});

export default Cart;

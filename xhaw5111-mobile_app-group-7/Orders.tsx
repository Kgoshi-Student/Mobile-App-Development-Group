// Orders.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useCart } from './CartContext';

const Orders = () => {
  const { confirmedOrders } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <ScrollView>
        {confirmedOrders.length === 0 ? (
          <Text style={styles.emptyMessage}>No confirmed orders yet.</Text>
        ) : (
          confirmedOrders.map((item, index) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  itemContainer: { marginBottom: 12, backgroundColor: '#FFFFFF', padding: 10, borderRadius: 8, elevation: 2 },
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
  emptyMessage: { textAlign: 'center', marginTop: 20 },
});

export default Orders;

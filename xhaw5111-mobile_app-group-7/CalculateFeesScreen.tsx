// CalculateFeesScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

type Course = {
  name: string;
  duration: string;
  price: number;
};

// Define course data
const courses: Course[] = [
  { name: 'First Aid', duration: 'Six-Month', price: 1500 },
  { name: 'Sewing', duration: 'Six-Month', price: 1500 },
  { name: 'Landscaping', duration: 'Six-Month', price: 1500 },
  { name: 'Life Skills', duration: 'Six-Month', price: 1500 },
  { name: 'Child Minding', duration: 'Six-Week', price: 750 },
  { name: 'Cooking', duration: 'Six-Week', price: 750 },
  { name: 'Garden Maintenance', duration: 'Six-Week', price: 750 },
];

const CalculateFeesScreen = () => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  // Toggle course selection
  const toggleCourseSelection = (course: Course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // Calculate total fees and apply discounts
  const calculateTotalFees = () => {
    const totalPrice = selectedCourses.reduce((total, course) => total + course.price, 0);

    // Apply discounts
    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05; // 5% discount for 2 courses
    else if (selectedCourses.length === 3) discount = 0.1; // 10% discount for 3 courses
    else if (selectedCourses.length >= 4) discount = 0.15; // 15% discount for 4+ courses

    const finalPrice = totalPrice * (1 - discount);
    return { totalPrice, discount, finalPrice };
  };

  const { totalPrice, discount, finalPrice } = calculateTotalFees();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.courseItem,
              selectedCourses.includes(item) ? styles.selectedCourse : null,
            ]}
            onPress={() => toggleCourseSelection(item)}
          >
            <Text style={styles.courseText}>{item.name} ({item.duration}) - ${item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Selected Courses: {selectedCourses.length}</Text>
        <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.totalText}>Discount Applied: {discount * 100}%</Text>
        <Text style={styles.totalText}>Final Price: ${finalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  courseItem: { padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 8 },
  selectedCourse: { backgroundColor: '#d3f8d3' },
  courseText: { fontSize: 16 },
  totalContainer: { marginTop: 20, padding: 12, borderTopWidth: 1, borderColor: '#ccc' },
  totalText: { fontSize: 16, fontWeight: 'bold', marginVertical: 4 },
});

export default CalculateFeesScreen;

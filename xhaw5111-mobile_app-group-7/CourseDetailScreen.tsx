// CourseDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';

// Course data for demonstration purposes
const courses = [
  {
    id: 1,
    name: 'First Aid',
    fees: 'R1500',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress e.g., Choking, blocked airway',
    ],
  },
  {
    id: 2,
    name: 'Sewing',
    fees: 'R1500',
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems and seams',
      'Alterations',
      'Designing and sewing new garments',
    ],
  },
  {
    id: 3,
    name: 'Landscaping',
    fees: 'R1500',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ],
  },
  {
    id: 4,
    name: 'Life Skills',
    fees: 'R1500',
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ],
  },
  {
    id: 5,
    name: 'Child Minding',
    fees: 'R750',
    content: [
      'Birth to six-month old baby needs',
      'Seven-month to one-year old needs',
      'Toddler needs',
      'Educational toys',
    ],
  },
  {
    id: 6,
    name: 'Cooking',
    fees: 'R750',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates and vegetables',
      'Planning meals',
      'Preparation and cooking of meals',
    ],
  },
  {
    id: 7,
    name: 'Garden Maintenance',
    fees: 'R750',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for different plant types',
    ],
  },
];

export default function CourseDetailScreen({ route }) {
  const { courseId } = route.params;
  const course = courses.find(c => c.id === courseId); // Find course details based on ID
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleAddToCart = () => {
    addToCart({ id: course.id, name: course.name, price: course.fees }); // Add course to cart
    alert(`${course.name} added to cart!`); // Alert user
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Image Placeholder</Text>
      </View>
      <Text style={styles.courseTitle}>{course.name}</Text>
      <Text style={styles.courseFees}>Fees: {course.fees}</Text>
      <Text style={styles.courseSubtitle}>Content:</Text>
      {course.content.map((item, index) => (
        <Text key={index} style={styles.courseContent}>{`• ${item}`}</Text>
      ))}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#F5F5F5', flex: 1 },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageText: {
    color: '#808080',
    fontSize: 16,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseFees: {
    fontSize: 16,
    marginBottom: 10,
  },
  courseSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  courseContent: {
    fontSize: 16,
    marginBottom: 4,
  },
  addToCartButton: {
    backgroundColor: '#A52A2A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

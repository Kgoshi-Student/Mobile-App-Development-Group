import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image, 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native"; 

type Course = {
  id: number;
  name: string;
  subtitle: string;
  images: any; 
};

const sixMonthCourses: Course[] = [
  {
    id: 1,
    name: "First Aid",
    subtitle: "Become a certified first aid responder in 6 months!",
    images: require("./_images/first_aid.jpg"),
  },
  {
    id: 2,
    name: "Sewing",
    subtitle: "Master sewing techniques in 6 months!",
    images: require("./_images/sewing.jpg"),
  },
  {
    id: 3,
    name: "Landscaping",
    subtitle: "Learn landscaping skills in 6 months!",
    images: require("./_images/landscaping.jpg"),
  },
  {
    id: 4,
    name: "Life Skills",
    subtitle: "Enhance your life skills in 6 months!",
    images: require("./_images/life_skills.jpg"),
  },
];

const sixWeekCourses: Course[] = [
  {
    id: 5,
    name: "Child Minding",
    subtitle: "Get skilled in child minding in just 6 weeks!",
    images: require("./_images/child_minding.jpg"),
  },
  {
    id: 6,
    name: "Cooking",
    subtitle: "Sharpen your cooking skills in 6 weeks!",
    images: require("./_images/cooking.jpg"),
  },
  {
    id: 7,
    name: "Garden Maintenance",
    subtitle: "Learn garden maintenance in 6 weeks!",
    images: require("./_images/garden_maintenance.jpg"),
  },
];

type Props = {
  navigation: NavigationProp<any>;
};

const ExploreCoursesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Explore Our Courses</Text>
        <Text style={styles.subtitle}>Discover skills, grow your career.</Text>

        <TextInput
          placeholder="Search courses, skills, or topics..."
          style={styles.searchInput}
        />

        <Text style={styles.sectionTitle}>Six-Month Courses</Text>
        {sixMonthCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            onPress={() =>
              navigation.navigate("CourseDetail", { courseId: course.id })
            }
            style={styles.courseItem}
          >
            {/* Display the course image */}
            <Image source={course.images} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.name}</Text>
            <Text style={styles.courseSubtitle}>{course.subtitle}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Six-Week Courses</Text>
        {sixWeekCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            onPress={() =>
              navigation.navigate("CourseDetail", { courseId: course.id })
            }
            style={styles.courseItem}
          >
            {/* Display the course image */}
            <Image source={course.images} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.name}</Text>
            <Text style={styles.courseSubtitle}>{course.subtitle}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => navigation.navigate("CalculateFees")}
          style={styles.calculateFeesButton}
        >
          <Text style={styles.calculateFeesButtonText}>Calculate Fees</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ExploreCourses")}
          style={styles.navItem}
        >
          <Ionicons name="home-outline" size={24} color="#A52A2A" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.navItem}
        >
          <Ionicons name="cart-outline" size={24} color="#A52A2A" />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Orders")}
          style={styles.navItem}
        >
          <Ionicons name="list-outline" size={24} color="#A52A2A" />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#A52A2A",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#808080",
    marginBottom: 24,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#A52A2A",
    marginBottom: 12,
  },
  courseItem: {
    marginBottom: 24,
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A52A2A",
    marginBottom: 4,
  },
  courseSubtitle: {
    fontSize: 14,
    color: "#808080",
  },
  calculateFeesButton: {
    backgroundColor: "#A52A2A",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  calculateFeesButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EAEAEA",
    backgroundColor: "#F5F5F5",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#A52A2A",
  },
});

export default ExploreCoursesScreen;

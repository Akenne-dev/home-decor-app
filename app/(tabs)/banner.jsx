import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const Banner = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Special Offer</Text>

        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoryText}>Living Room</Text>
        <Text style={styles.line}>|</Text>

        <Text style={styles.categoryText}>Decorative Light</Text>
        <Text style={styles.line}>|</Text>

        <Text style={styles.categoryText}>Bed</Text>
      </View>



      <TouchableOpacity onPress={() => router.push("/sofa")}>
          <Image
            source={require("../../assets/images/banner.png")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#f3b4a3",
    fontSize: 20,
    fontWeight: "bold",
  },

  searchButton: {
    backgroundColor: "#f3b4a3",
    padding: 10,
    borderRadius: 20,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    flexWrap: "wrap",
  },

  categoryText: {
    color: "#fff",
    fontSize: 14,
  },

  line: {
    color: "#f3b4a3",
    marginHorizontal: 35,
  },

  bannerImage: {
    width: "100%",
    height: 640,
    borderRadius: 20,
    marginTop: 30,
  },


});

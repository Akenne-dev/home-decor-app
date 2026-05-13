import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export const CategoryHeader = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.topCategories}>
        <Text style={styles.topCategoryText}>Living Room</Text>
        <Text style={styles.line}>|</Text>
        <Text style={styles.topCategoryText}>Decorative Light</Text>
        <Text style={styles.line}>|</Text>
        <Text style={styles.topCategoryText}>Bed</Text>
      </View>
    </>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },

  title: {
    color: "#f3b4a3",
    fontSize: 23,
    fontWeight: "bold",
  },

  searchButton: {
    backgroundColor: "#f3b4a3",
    padding: 7,
    borderRadius: 29,
  },

  topCategories: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
    flexWrap: "wrap",
  },
  topCategoryText: {
    color: "#ffffff",
    fontSize: 15,
  },
  line: {
    marginHorizontal: 20,
    color: "#cdb4ac",
    fontSize: 16,
  },
});

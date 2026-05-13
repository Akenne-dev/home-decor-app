import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export const CategoryBox = ({ title, route }) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.box} onPress={() => router.push(route)}>
      <Text style={styles.boxText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const RectangleBox = ({ title, route }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.rectangleBox}
      onPress={() => router.push(route)}
    >
      <Text style={styles.boxText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F4B5A4",
    borderRadius: 25,
    padding: 12,
    width: "49%",
    aspectRatio: 1,
    marginBottom: 11,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  rectangleBox: {
    backgroundColor: "#F4B5A4",
    borderRadius: 25,
    padding: 20,
    width: "100%",
    height: 150,
    marginTop: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  boxText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

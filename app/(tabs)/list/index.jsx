import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../components/list/CategoryHeader";
import {
  CategoryBox,
  RectangleBox,
} from "../../../components/list/CategoryBox";

const ListIndex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryHeader title="List" />

        <View style={styles.boxContainer}>
          <CategoryBox title={"Bedroom"} route="/list/bedroom" />
          <CategoryBox title={"Living Room"} route="/list/living" />
          <CategoryBox title={"Kitchen"} route="/list/kitchen" />
          <CategoryBox title={"Dining Room"} route="/list/dining" />
          <CategoryBox title={"Office"} route="/list/office" />
          <CategoryBox title={"Best Seller"} route="/list/bestseller" />

          <RectangleBox title="New Collection" route="/list/collection" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 35,
    paddingBottom: 40,
  },
});

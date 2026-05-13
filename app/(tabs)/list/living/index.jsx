import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const LIVING_PRODUCTS = [
  {
    id: "1",
    title: "Luxury Sofa",
    price: "850",
    image: require("../../../../assets/images/livingSofa(2).png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Living Room", "Furniture", "Sofa"],
  },
  {
    id: "2",
    title: "Modern Couch",
    price: "720",
    image: require("../../../../assets/images/livingSofa(3).png"),
    description:
      "Contemporary couch design perfect for modern living rooms. Comfortable and stylish.",
    categories: ["Living Room", "Furniture", "Couch"],
  },
  {
    id: "3",
    title: "Coffee Table",
    price: "280",
    image: require("../../../../assets/images/collection1.png"),
    description:
      "Elegant coffee table adds sophistication to your living space. Perfect centerpiece.",
    categories: ["Living Room", "Furniture", "Table"],
  },
  {
    id: "4",
    title: "Wall Lamp",
    price: "95",
    image: require("../../../../assets/images/banner.png"),
    description:
      "Modern wall lamp for ambient lighting. Energy efficient and stylish design.",
    categories: ["Living Room", "Lighting", "Lamp"],
  },
  {
    id: "4",
    title: "Wall Lamp",
    price: "95",
    image: require("../../../../assets/images/banner.png"),
    description:
      "Modern wall lamp for ambient lighting. Energy efficient and stylish design.",
    categories: ["Living Room", "Lighting", "Lamp"],
  },
  {
    id: "4",
    title: "Wall Lamp",
    price: "95",
    image: require("../../../../assets/images/banner.png"),
    description:
      "Modern wall lamp for ambient lighting. Energy efficient and stylish design.",
    categories: ["Living Room", "Lighting", "Lamp"],
  },
  
];

const LivingScreen = () => {
  const renderProduct = ({ item }) => (
    <ProductCard
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      isFavorite={false}
      onFavoritePress={() => {}}
      onAddPress={() => {}}
      product={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <CategoryHeader title="Living Room" />
      <FlatList
        data={LIVING_PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default LivingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },
  columnWrapper: {
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    paddingBottom: 30,
  },
});

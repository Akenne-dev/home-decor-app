import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const BESTSELLER_PRODUCTS = [
  {
    id: "1",
    title: "Best Seller Chair",
    price: "320",
    image: require("../../../../assets/images/bestseller1.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Furniture", "Best Seller", "Chair"],
  },
  {
    id: "2",
    title: "Popular Sofa",
    price: "680",
    image: require("../../../../assets/images/bestseller2.png"),
    description: "Highly rated sofa that customers love.",
    categories: ["Furniture", "Best Seller", "Sofa"],
  },
  {
    id: "3",
    title: "Classic Lamp",
    price: "95",
    image: require("../../../../assets/images/banner.png"),
    description: "Timeless lamp design that fits any decor.",
    categories: ["Lighting", "Best Seller", "Lamp"],
  },
  {
    id: "4",
    title: "Trending Table",
    price: "280",
    image: require("../../../../assets/images/collection1.png"),
    description: "Table in high demand this season.",
    categories: ["Furniture", "Best Seller", "Table"],
  },
];

const BestsellerScreen = () => {
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
      <CategoryHeader title="Best Seller" />
      <FlatList
        data={BESTSELLER_PRODUCTS}
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

export default BestsellerScreen;

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

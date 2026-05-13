import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const DINING_PRODUCTS = [
  {
    id: "1",
    title: "Dining Table",
    price: "550",
    image: require("../../../../assets/images/dining1.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Dining Room", "Furniture", "Table"],
  },
  {
    id: "2",
    title: "Chair Set",
    price: "480",
    image: require("../../../../assets/images/dining2.png"),
    description: "Comfortable and stylish chairs for your dining room.",
    categories: ["Dining Room", "Furniture", "Chair"],
  },
  {
    id: "3",
    title: "Table Runner",
    price: "75",
    image: require("../../../../assets/images/Rectangle-table.png"),
    description: "Beautiful table runner to enhance your dining experience.",
    categories: ["Dining Room", "Decor", "Runner"],
  },
  {
    id: "4",
    title: "Centerpiece",
    price: "120",
    image: require("../../../../assets/images/collection2.png"),
    description: "Elegant centerpiece for your dining table.",
    categories: ["Dining Room", "Decor", "Centerpiece"],
  },
];

const DiningScreen = () => {
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
      <CategoryHeader title="Dining Room" />
      <FlatList
        data={DINING_PRODUCTS}
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

export default DiningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },
  columnWrapper: {
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 52,
    paddingBottom: 30,
  },
});

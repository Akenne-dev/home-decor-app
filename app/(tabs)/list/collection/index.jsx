import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const COLLECTION_PRODUCTS = [
  {
    id: "1",
    title: "Premium Collection",
    price: "950",
    image: require("../../../../assets/images/collection1.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["New Collection", "Premium", "Furniture"],
  },
  {
    id: "2",
    title: "Exclusive Set",
    price: "1100",
    image: require("../../../../assets/images/collection2.png"),
    description: "Exclusive collection piece only available for limited time.",
    categories: ["New Collection", "Exclusive", "Set"],
  },
  {
    id: "3",
    title: "Designer Chair",
    price: "750",
    image: require("../../../../assets/images/bestseller1.png"),
    description: "Premium designer chair from our latest collection.",
    categories: ["New Collection", "Designer", "Chair"],
  },
  {
    id: "4",
    title: "Limited Edition",
    price: "1500",
    image: require("../../../../assets/images/bedroom.png"),
    description: "Rare limited edition piece for collectors.",
    categories: ["New Collection", "Limited Edition", "Exclusive"],
  },
];

const CollectionScreen = () => {
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
      <CategoryHeader title="New Collection" />
      <FlatList
        data={COLLECTION_PRODUCTS}
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

export default CollectionScreen;

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

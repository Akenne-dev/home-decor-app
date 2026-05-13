import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const BEDROOM_PRODUCTS = [
  {
    id: "1",
    title: "Modern Bed Frame",
    price: "450",
    image: require("../../../../assets/images/bedroom.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Bedroom", "Furniture", "Bed"],
  },
  {
    id: "2",
    title: "Luxury Mattress",
    price: "520",
    image: require("../../../../assets/images/bed.png"),
    description:
      "Premium quality mattress for ultimate comfort. Designed for restful sleep and long-lasting durability.",
    categories: ["Bedroom", "Mattress", "Sleep"],
  },
  {
    id: "3",
    title: "Bedroom Cabinet",
    price: "310",
    image: require("../../../../assets/images/office1.png"),
    description:
      "Elegant storage cabinet perfect for bedroom organization. Spacious and stylish design.",
    categories: ["Bedroom", "Storage", "Cabinet"],
  },
  {
    id: "4",
    title: "Nightstand",
    price: "125",
    image: require("../../../../assets/images/kitchen1.png"),
    description:
      "Compact nightstand with drawer storage. Perfect bedside companion for bedroom décor.",
    categories: ["Bedroom", "Furniture", "Table"],
  },
];

const BedroomScreen = () => {
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
      <CategoryHeader title="Bedroom" />
      <FlatList
        data={BEDROOM_PRODUCTS}
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

export default BedroomScreen;

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
    paddingVertical: 22,
    paddingBottom: 3,
  },
});

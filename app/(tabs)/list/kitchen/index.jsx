import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const KITCHEN_PRODUCTS = [
  {
    id: "1",
    title: "Kitchen Island",
    price: "890",
    image: require("../../../../assets/images/kitchen1.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Kitchen", "Furniture", "Island"],
  },
  {
    id: "2",
    title: "Dining Table Set",
    price: "720",
    image: require("../../../../assets/images/kitchen2.png"),
    description:
      "Complete dining set for the modern kitchen. Spacious and durable.",
    categories: ["Kitchen", "Furniture", "Table"],
  },
  {
    id: "3",
    title: "Cabinet Shelves",
    price: "350",
    image: require("../../../../assets/images/dining1.png"),
    description:
      "Organized storage cabinets for kitchen organization and style.",
    categories: ["Kitchen", "Storage", "Cabinet"],
  },
  {
    id: "4",
    title: "Bar Stools",
    price: "160",
    image: require("../../../../assets/images/dining2.png"),
    description: "Stylish bar stools perfect for kitchen counter seating.",
    categories: ["Kitchen", "Seating", "Stool"],
  },
];

const KitchenScreen = () => {
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
      <CategoryHeader title="Kitchen" />
      <FlatList
        data={KITCHEN_PRODUCTS}
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

export default KitchenScreen;

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

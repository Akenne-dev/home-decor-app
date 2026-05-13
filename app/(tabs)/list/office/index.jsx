import React from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductCard } from "../../../../components/list/ProductCard";

const OFFICE_PRODUCTS = [
  {
    id: "1",
    title: "Executive Desk",
    price: "580",
    image: require("../../../../assets/images/office1.png"),
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean quis magna. Auctor neque id pharetra gravida.",
    categories: ["Office", "Furniture", "Desk"],
  },
  {
    id: "2",
    title: "Office Chair",
    price: "420",
    image: require("../../../../assets/images/office2.png"),
    description: "Ergonomic office chair for comfortable long working hours.",
    categories: ["Office", "Furniture", "Chair"],
  },
  {
    id: "3",
    title: "Desk Lamp",
    price: "85",
    image: require("../../../../assets/images/banner.png"),
    description: "Bright desk lamp for optimal workspace lighting.",
    categories: ["Office", "Lighting", "Lamp"],
  },
  {
    id: "4",
    title: "Shelving Unit",
    price: "240",
    image: require("../../../../assets/images/collection1.png"),
    description: "Spacious shelving unit for office organization.",
    categories: ["Office", "Storage", "Shelves"],
  },
];

const OfficeScreen = () => {
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
      <CategoryHeader title="Office" />
      <FlatList
        data={OFFICE_PRODUCTS}
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

export default OfficeScreen;

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

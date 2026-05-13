import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CategoryHeader from "../../../../components/list/CategoryHeader";
import { ProductDetails } from "../../../../components/list/ProductDetails";


const BedroomDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryHeader title="Bedroom" />

                <View>
                  <ProductDetails
                    title="Trundle Bed"
                    image={require("../../../../assets/images/bed.png")}
                    price="$420"
                  />
                </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BedroomDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },

  categories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  categoryText: {
    color: "#f4b5a4",
    fontSize: 12,
    fontWeight: "500",
  },

  categorySeparator: {
    color: "#f4b5a4",
    marginHorizontal: 8,
    fontSize: 12,
  },

  imageContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  image: {
    width: "90%",
    height: "100%",
  },

  productTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  description: {
    color: "#ccc",
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  horizontalLine: {
    height: 1,
    backgroundColor: "#555",
    marginHorizontal: 20,
    marginVertical: 15,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  price: {
    color: "#f4b5a4",
    fontSize: 24,
    fontWeight: "bold",
  },

  iconRow: {
    flexDirection: "row",
    gap: 12,
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(244, 181, 164, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  reviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
  },

  reviewText: {
    color: "#f4b5a4",
    fontSize: 14,
    fontWeight: "500",
  },

  cartButton: {
    backgroundColor: "#f4b5a4",
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },

  cartText: {
    color: "#363130",
    fontSize: 16,
    fontWeight: "bold",
  },
});

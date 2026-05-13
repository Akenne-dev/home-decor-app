import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar'; 

const Sofa = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>Sofa</Text>

          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          <Text style={styles.categoryText}>Living Room</Text>

          <Text style={styles.line}>|</Text>

          <Text style={styles.categoryText}>Decorative Light</Text>

          <Text style={styles.line}>|</Text>

          <Text style={styles.categoryText}>Bed</Text>
        </View>

        <Image
          source={require("../../assets/images/sofa.png")}
          style={styles.sofaImage}
          resizeMode="contain"
        />

        <Text style={styles.sofaTitle}>Luxe Lounge Sofa</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean
          quis magna. Auctor neque id pharetra gravida. Libero scelerisque ut
          mauris volutpat risus nec facilisi adipiscing. Augue mollis amet.
        </Text>

        <View style={styles.horizontalLine} />

        <View style={styles.priceRow}>
          <Text style={styles.price}>$220.00</Text>

          <View style={styles.iconRow}>
            <Image
              source={require("../../assets/images/Favourites.png")}
              style={styles.smallIcon}
            />

            <Image
              source={require("../../assets/images/Add.png")}
              style={styles.smallIcon}
            />
          </View>
        </View>

        <View style={styles.reviewRow}>
          <Text style={styles.reviewText}>Users review</Text>

          <Image
            source={require("../../assets/images/star.png")}
            style={styles.starIcon}
          />
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sofa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 20,
    paddingTop: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  title: {
    color: "#f3b4a3",
    fontSize: 23,
    fontWeight: "bold",
  },

  searchButton: {
    backgroundColor: "#f3b4a3",
    padding: 7,
    borderRadius: 29,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    flexWrap: "wrap",
  },

  categoryText: {
    color: "#fff",
    fontSize: 14,
  },

  line: {
    color: "#f3b4a3",
    marginHorizontal: 35,
  },

  sofaImage: {
    width: "100%",
    height: 270,
    borderRadius: 25,
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#faf0e6",
    padding: 40,
  },

  sofaTitle: {
    color: "#f3b4a3",
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 26,
  },

  description: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 15,
  },

  horizontalLine: {
    height: 2,
    backgroundColor: "#f3b4a3",
    marginTop: 20,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  price: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  iconRow: {
    flexDirection: "row",
  },

  smallIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode: "contain",
  },

  reviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  reviewText: {
    color: "#fff",
    fontSize: 14,
  },

  starIcon: {
    width: 100,
    height: 18,
    resizeMode: "contain",
  },

  cartButton: {
    backgroundColor: "#4b4544",
    paddingVertical: 13,
    marginHorizontal: 69,
    borderRadius: 28,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },

  cartText: {
    color: "#f3b4a3",
    fontSize: 19,
    fontWeight: "bold",
  },
});

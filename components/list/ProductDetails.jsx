import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

export const ProductDetails = ({
  title,
  image,
  description,
  price,
  categories = [],
}) => {
  const router = useRouter();

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={ image } style={styles.image} resizeMode="contain" />
        </TouchableOpacity>

        <Text style={styles.productTitle}>{title}</Text>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Odio neque commodo id aenean
          quis magna. Auctor neque id pharetra gravida. Libero scelerisque ut
          mauris volutpat risus nec facilisi adipiscing. Augue mollis amet.
        </Text>

        <View style={styles.horizontalLine} />
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>

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
          <Text
            style={styles.reviewText}
            onPress={() => router.push("/reviews")}
          >
            Users review
          </Text>

          <Image
            source={require("../../assets/images/star.png")}
            style={styles.starIcon}
          />
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 270,
    borderRadius: 25,
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#faf0e6",
    padding: 40,
  },

  productTitle: {
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
    marginTop: 20,
    marginBottom: 30,
  },

  reviewText: {
    color: "#f3b4a3",
    fontSize: 14,
    fontWeight: "600",
  },

  starIcon: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },

  cartButton: {
    backgroundColor: "#f3b4a3",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 40,
  },

  cartText: {
    color: "#363130",
    fontSize: 16,
    fontWeight: "bold",
  },
});

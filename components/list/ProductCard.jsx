import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export const ProductCard = ({
  id,
  title,
  price,
  image,
  isFavorite,
  onFavoritePress,
  onAddPress,
  product,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleImagePress = () => {
    router.push({
      pathname: pathname + `/details`,
      params: { productId: id, product: JSON.stringify(product) },
    });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={handleImagePress}
        activeOpacity={0.7}
      >
        <Image source={image} style={styles.image} resizeMode="cover" />

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => onFavoritePress(id)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={18}
            color={isFavorite ? "#f4b5a4" : "#fff"}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.price}>${price}</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddPress(id)}
        >
          <Ionicons name="add" size={18} color="#363130" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 6,
    marginBottom: 0,
    marginTop: 22,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: 140,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: 10,
  },

  title: {
    fontSize: 12,
    fontWeight: "600",
    color: "#363130",
    marginBottom: 5,
    lineHeight: 15,
  },

  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#f4b5a4",
    marginBottom: 8,
  },

  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f4b5a4",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

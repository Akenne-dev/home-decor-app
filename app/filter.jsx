import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import Slider from '@react-native-community/slider'; 

const filter = () => {
  const [price, setPrice] = useState(500);
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Auxilliary Furniture</Text>

          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View style={styles.topCategories}>
          <Text style={styles.topCategoryText}>Living Room</Text>
          <Text style={styles.line}>|</Text>
          <Text style={styles.topCategoryText}>Decorative Light</Text>
          <Text style={styles.line}>|</Text>
          <Text style={styles.topCategoryText}>Bed</Text>
        </View>
      </View>

      <View style={styles.secondSection}>
        <Text style={styles.filterTitle}>Filter</Text>

        {/* <Text style={styles.sectionTitle}>Price Range</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressFilled} />
          <View style={styles.progressThumb} />
        </View>

        <View style={styles.priceLabels}>
          <Text style={styles.priceText}>$100</Text>
          <Text style={styles.priceText}>$500</Text>
          <Text style={styles.priceText}>$1000</Text>
          <Text style={styles.priceText}>$1500</Text>
        </View> */}

        <Text style={styles.sectionTitle}>Price Range: ${price}</Text>

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={100}
          maximumValue={1500}
          step={50}
          value={price}
          onValueChange={(val) => setPrice(val)}
          minimumTrackTintColor="#f4b6a4"
          maximumTrackTintColor="#fff"
          thumbTintColor="#f4b6a4"
        />

        <View style={styles.priceLabels}>
          <Text style={styles.priceText}>$100</Text>
          <Text style={styles.priceText}>$500</Text>
          <Text style={styles.priceText}>$1000</Text>
          <Text style={styles.priceText}>$1500</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Bedroom</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Living Room</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activeButton}>
            <Text style={styles.activeButtonText}>Kitchen</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Office</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Dining Room</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Products</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Sofa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Tables</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activeButton}>
            <Text style={styles.activeButtonText}>Boards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Decor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>Office</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}> Lamp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}> Chair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.normalButton}>
            <Text style={styles.normalButtonText}>stand</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}></View>

        <Text style={styles.sectionTitle}>Colors</Text>

        <View style={styles.colorRow}>
          <View style={[styles.colorCircle, { backgroundColor: "#b3a0ff" }]} />

          <View
            style={[
              styles.colorCircle,
              {
                backgroundColor: "#a0c0ff",
                borderWidth: 2,
                borderColor: "#fff",
              },
            ]}
          />

          <View style={[styles.colorCircle, { backgroundColor: "#00bbd3" }]} />

          <View style={[styles.colorCircle, { backgroundColor: "#ec6f17" }]} />

          <View style={[styles.colorCircle, { backgroundColor: "#000" }]} />

          <View
            style={[
              styles.colorCircle,
              {
                backgroundColor: "#e1d6d6",
                // borderWidth: 1,
                // borderColor: "#ccc",
              },
            ]}
          />
        </View>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },

  topSection: {
    backgroundColor: "#80655d",
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 40,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f4b6a4",
  },

  searchButton: {
    backgroundColor: "#f4b6a4",
    padding: 6,
    borderRadius: 20,
  },

  topCategories: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
    flexWrap: "wrap",
  },

  topCategoryText: {
    color: "#cdb4ac",
    fontSize: 14,
  },

  line: {
    marginHorizontal: 33,
    color: "#cdb4ac",
  },

  secondSection: {
    flex: 1,
    backgroundColor: "#3c3432",
    padding: 20,
    // borderTopLeftRadius: 250,
    // borderTopRightRadius: 250,
  },

  filterTitle: {
    color: "#f4b6a4",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
  },

  sectionTitle: {
    color: "#f4b6a4",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 6,
  },

  progressContainer: {
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "relative",
    marginTop: 10,
  },

  progressFilled: {
    width: "30%",
    height: 6,
    backgroundColor: "#f4b6a4",
    borderRadius: 10,
  },

  progressThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f4b6a4",
    position: "absolute",
    left: "28%",
    top: -7,
  },

  priceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  priceText: {
    color: "#fff",
    fontSize: 12,
  },

  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 0,
  },

  normalButton: {
    backgroundColor: "#4b4544",
    paddingVertical: 9,
    paddingHorizontal: 26,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  normalButtonText: {
    color: "#f4b6a4",
    fontWeight: "600",
  },

  activeButton: {
    backgroundColor: "#f4b6a4",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  activeButtonText: {
    color: "#db856e",
    fontWeight: "bold",
  },

  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    // paddingVertical: 10,
    paddingHorizontal: 5,
  },

  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 34,
  },

  applyButton: {
    backgroundColor: "#4b4544",
    paddingVertical: 13,
    marginHorizontal: 100,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  applyButtonText: {
    color: "#e39a86",
    fontSize: 18,
    fontWeight: "bold",
  },
});

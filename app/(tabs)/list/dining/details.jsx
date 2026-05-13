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

const DiningDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryHeader title="Dining" />

        <View>
          <ProductDetails
            title="Glass Table"
            image={require("../../../../assets/images/dining2.png")}
            price="$220"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiningDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },
});

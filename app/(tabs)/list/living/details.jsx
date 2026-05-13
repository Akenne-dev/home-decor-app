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

const LivingDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoryHeader title="Living" />

        <View>
          <ProductDetails
            title="Velvet Sofa"
            image={require("../../../../assets/images/collection2.png")}
            price="$520"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LivingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },
});

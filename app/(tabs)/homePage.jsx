
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hi, Welcome back</Text>
            <Text style={styles.titleText}>Create spaces that bring joy</Text>
          </View>

          {/* <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={22} color="#000" />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/search")}
          >
            <Ionicons name="search" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.imagesContainer}>
          {/* <Image
            source={require("../../assets/images/Frame-24.png")}
            style={styles.image}
          /> */}

          <TouchableOpacity onPress={() => router.push("/banner")}>
            <Image
              source={require("../../assets/images/Frame-24.png")}
              style={styles.image}
            />
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/Frame-25.png")}
            style={styles.image}
          />

          <Image
            source={require("../../assets/images/Frame-26.png")}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    marginTop:40,
    paddingHorizontal: 20,
  },

  welcomeText: {
    color: "#f4b5a4",
    fontSize: 23,
    fontWeight: "600",
  },

  titleText: {
    color: "#fff",
    fontSize: 13,
  },

  searchButton: {
    width: 39,
    height: 39,
    backgroundColor: "#f4b5a4",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  imagesContainer: {
    // marginHorizontal: 500,
    // paddingHorizontal: -50,
  },

  image: {
    width: "100%",
    height: 250, // Slightly taller looks better for furniture images
    borderRadius: 20,
    marginBottom: 20,
    // paddingHorizontal: -100,

    resizeMode: "stretch", // 4. This ensures the full design fits the box
  },
});
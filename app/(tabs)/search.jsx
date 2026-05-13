import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Search</Text>

          <View style={{ width: 28 }} />
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#000"
            style={styles.searchInput}
          />
          {/* <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={20} color="#000" />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => router.push("/filter")}
          >
            <Ionicons name="options" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.topSearches}>Top Searches</Text>

        <View style={styles.listContainer}>
          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Bed</Text>
          </View>

          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Lamp</Text>
          </View>

          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Plastic Plants</Text>
          </View>

          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Carpet</Text>
          </View>

          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Sofa</Text>
          </View>

          <View style={styles.searchItem}>
            <View style={styles.searchIconCircle}>
              <Ionicons name="search" size={16} color="#000" />
            </View>
            <Text style={styles.searchText}>Blue Chairs</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 50,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  headerTitle: {
    color: "#f4b5a4",
    fontSize: 22,
    fontWeight: "600",
  },

  searchContainer: {
    position: "relative",
    marginBottom: 40,
    width: "100%", 
  },

  searchInput: {
    height: 44,
    backgroundColor: "#fff",
    borderColor: "#f4b5a4",
    borderWidth: 2,
    borderRadius: 29,
    paddingHorizontal: 20,
    paddingRight: 70,
    color: "#494646",
    fontSize: 15,
  },

  filterButton: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 32,
    height: 32,
    backgroundColor: "#f4b5a4",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  topSearches: {
    color: "#f4b5a4",
    fontSize: 20,
    marginBottom: 25,
    fontWeight: "600",
  },

  listContainer: {
    marginBottom: 30,
  },

  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5eee6",
    height: 48,
    borderRadius: 29,
    paddingHorizontal: 18,
    marginBottom: 15,
    marginHorizontal: 9,
  },

  searchIconCircle: {
    width: 30,
    height: 30,
    backgroundColor: "#f4b5a4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  searchText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 12,
  },
});

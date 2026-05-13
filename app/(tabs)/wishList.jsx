import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Wishlist Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#f4b5a4",
    fontSize: 20,
  },
});

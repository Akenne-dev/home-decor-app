import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cart Screen</Text>
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

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import SetPassword from "./setpassword";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Forgot() {
  const router = useRouter();
  // const navigation = navigator();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.back} onPress={() => router.back()}>
        ←
      </Text>
      <Text style={styles.header}>Forgot Password</Text>

      <Text style={styles.title}>Reset password?</Text>

      <View style={styles.card}>
        <Text>Enter your email address</Text>

        <TextInput style={styles.input} placeholder="example@example.com" />

        {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => router.replace("/auth/login")}
      >
        <Text>Reset Password</Text>
      </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/setpassword")}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    padding: 20,
    paddingTop: 60,
  },

  back: {
    color: "#f4b5a4",
    fontSize: 22,
  },

  header: {
    color: "#f4b5a4",
    textAlign: "center",
    marginTop: -20,
  },

  title: {
    color: "#ffffff",
    marginTop: 20,
    fontSize: 18,
  },

  card: {
    backgroundColor: "#faf0e6",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },

  btn: {
    backgroundColor: "#f4b5a4",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 15,
  },

  btnText: {
    color: "#d4856f",
  },
});

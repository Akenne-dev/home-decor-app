import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  // StyleSheets,
} from "react-native";
import { useRouter } from "expo-router";

export default function SetPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.back} onPress={() => router.back()}>
        ←
      </Text>
      <Text style={styles.header}>Set Password</Text>
      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => router.replace("/auth/login")}
      >
        <Text>Reset Password</Text>
      </TouchableOpacity> */}
      <Text style={styles.title}>Change the password?</Text>

      <TextInput style={styles.input} placeholder="........" />
      <TextInput style={styles.input} placeholder="........" />

      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => router.replace("/auth/login")}
      >
        <Text>Reset Password</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/login")}>
        <Text>Reset Password</Text>
        {/* <Text>password reseting</Text> */}
      </TouchableOpacity>
    </View>
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
    marginTop: 20,
  },

  btnText: {
    color: "#d4856f",
  },
});
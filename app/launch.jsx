import { StatusBar } from "expo-status-bar";
import { Stack, Link, useRouter } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";

export default function Launch() {

      const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/Vector.png")}
        style={styles.logo}
        resizeMode="contain"
      />


      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.home}>HOME</Text>
      </Pressable>
      <Text style={styles.decor}>DECOR</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => router.push("/(auth)/signup")}
      >

        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 230,
  },

  logo: {
    width: 120,
    height: 120,
  },


  home: {
    fontSize: 37,
    fontWeight: "bold",
    color: "#f4b5a4",
  },

  decor: {
    fontSize: 29,
    color: "#f4b5a4",
  },

  description: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    width: "80%",
    marginTop: 30,
  },

  loginBtn: {
    width: "100%",
    backgroundColor: "#f4b5a4",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 35,
  },

  loginText: {
    color: "#dd927e",
    fontSize: 16,
    fontWeight: "600",
  },

  signupBtn: {
    width: "100%",
    backgroundColor: "#4b4544",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#4b4544",
  },

  signupText: {
    color: "#f4b5a4",
    fontSize: 16,
    fontWeight: "600",
  },
});
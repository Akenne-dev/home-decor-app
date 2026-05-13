import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values) => {
    const success = await login(values.email, values.password);

    if (success) {
      Alert.alert("Success", "Login Successful");

      router.replace("/(tabs)/homePage");
    } else {
      Alert.alert("Error", "Invalid details");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text onPress={() => router.push("/")} style={styles.back}>
              ←
            </Text>

            <Text style={styles.headerText}>Log in</Text>
          </View>

          <Text style={styles.title}>Welcome</Text>

          <Text style={styles.sub}>Please enter your details to proceed</Text>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Text style={styles.label}>Username or Email</Text>

                <TextInput
                  style={styles.input}
                  placeholder="example@example.com"
                  placeholderTextColor="#c49883"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />

                {touched.email && errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}

                <Text style={styles.label}>Password</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder=". . . . . ."
                    placeholderTextColor="#b68d7a"
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />

                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Image
                      source={require("../../assets/images/Vectors.png")}
                      style={styles.inputIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => router.push("/homePage")}
                >
                  {/* <TouchableOpacity style={styles.btn} onPress={handleSubmit}> */}
                  <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <TouchableOpacity onPress={() => router.push("/forgot")}>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>

          <Text style={styles.or}>or sign up with</Text>

          <View style={styles.social}>
            <Image
              source={require("../../assets/images/fb.png")}
              style={styles.icon}
            />

            <Image
              source={require("../../assets/images/google.png")}
              style={styles.icon}
            />
          </View>

          <Text style={styles.bottomText}>
            Don’t have an account?{" "}
            <Text
              style={styles.signup}
              onPress={() => router.push("/(auth)/signup")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  back: {
    position: "absolute",
    left: 0,
    color: "#fff",
    fontSize: 22,
  },

  headerText: {
    color: "#f4b5a4",
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    color: "#ffffff",
    fontSize: 17,
    marginTop: 20,
  },

  sub: {
    color: "#ffffff",
    marginBottom: 40,
    marginTop: 6,
  },

  label: {
    color: "#ffffff",
    marginTop: 15,
  },

  input: {
    backgroundColor: "#faf0e6",
    borderRadius: 30,
    padding: 12,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#faf0e6",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  inputs: {
    flex: 1,
    paddingVertical: 12,
  },

  inputIcon: {
    width: 20,
    height: 20,
    tintColor: "#933407",
  },

  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 5,
  },

  btn: {
    backgroundColor: "#f4b5a4",
    paddingVertical: 7,
    paddingHorizontal: 45,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    minWidth: 150,
  },

  btnText: {
    color: "#c2705a",
    fontWeight: "600",
  },

  link: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 11,
  },

  or: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 100,
  },

  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 20,
  },

  icon: {
    width: 30,
    height: 30,
  },

  bottomText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
  },

  signup: {
    color: "#f4b5a4",
  },
});

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
//   ScrollView,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// export default function Login() {
//   const router = useRouter();
//   const { login } = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async () => {
//     const success = await login(email, password);

//     if (success) {
//       alert("Login Successfull");

//       router.replace("/(tabs)/homePage");
//     } else {
//       alert("Invalid details");
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         bounces={false}
//         showsVerticalScrollIndicator={false}
//       >

//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text onPress={() => router.push("/")} style={styles.back}>
//           ←
//         </Text>
//         <Text style={styles.headerText}>Log in</Text>
//       </View>

//       <Text style={styles.title}>Welcome</Text>
//       <Text style={styles.sub}>Please enter your details to proceed</Text>

//       <Text style={styles.label}>Username or Email</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="example@example.com"
//         placeholderTextColor="#c49883"
//         onChangeText={setEmail}
//       />

//       <Text style={styles.label}>Password</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputs}
//           placeholder=". . . . . ."
//           placeholderTextColor="#b68d7a"
//           secureTextEntry={!showPassword}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//           <Image
//             source={require("../../assets/images/Vectors.png")}
//             style={styles.inputIcon}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.btn} onPress={handleLogin}>
//         <Text style={styles.btnText}>Log in</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push("/forgot")}>
//         <Text style={styles.link}>Forgot password?</Text>
//       </TouchableOpacity>

//       <Text style={styles.or}>or sign up with</Text>

//       <View style={styles.social}>
//         <Image
//           source={require("../../assets/images/fb.png")}
//           style={styles.icon}
//         />
//         <Image
//           source={require("../../assets/images/google.png")}
//           style={styles.icon}
//         />
//       </View>

//       <Text style={styles.bottomText}>
//         Don’t have an account?{" "}
//         <Text style={styles.signup} onPress={() => router.push("/(auth)/signup")}>
//           Sign Up
//         </Text>
//       </Text>
//     </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#363130",
//     paddingHorizontal: 20,
//     paddingTop: 60,
//   },

//   header: {
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   back: {
//     position: "absolute",
//     left: 0,
//     color: "#fff",
//     fontSize: 22,
//   },

//   headerText: {
//     color: "#f4b5a4",
//     fontSize: 18,
//     fontWeight: "600",
//   },

//   title: {
//     color: "#ffffff",
//     fontSize: 17,
//     marginTop: 20,
//   },

//   sub: {
//     color: "#ffffff",
//     marginBottom: 40,
//     marginTop: 6,
//   },

//   label: {
//     color: "#ffffff",
//     marginTop: 15,
//   },

//   input: {
//     backgroundColor: "#faf0e6",
//     borderRadius: 30,
//     padding: 12,
//     marginTop: 10,
//   },

//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#faf0e6",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginTop: 5,
//   },

//   inputs: {
//     flex: 1,
//     paddingVertical: 12,
//   },

//   inputIcon: {
//     width: 20,
//     height: 20,
//     tintColor: "#933407",
//   },

//   btn: {
//     backgroundColor: "#f4b5a4",
//     paddingVertical: 7,
//     paddingHorizontal: 45,
//     borderRadius: 30,
//     alignItems: "center",
//     alignSelf: "center",
//     marginTop: 50,
//     minWidth: 150,
//   },

//   btnText: {
//     color: "#c2705a",
//     fontWeight: "600",
//   },

//   link: {
//     color: "#ffffff",
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 11,
//   },

//   or: {
//     color: "#ffffff",

//     textAlign: "center",
//     marginTop: 100,
//   },

//   social: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//     gap: 20,

//   },

//   icon: {
//     width: 30,
//     height: 30,
//   },

//   bottomText: {
//     color: "#ffffff",
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 10,
//   },

//   signup: {
//     color: "#f4b5a4",
//   },
// });

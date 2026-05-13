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

export default function Signup() {
  const router = useRouter();
  const { signup } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    mobile: Yup.string().required("Mobile number is required"),

    dob: Yup.string().required("Date of birth is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm your password"),
  });

  const handleSignup = async (values) => {
    await signup(values);

    Alert.alert("Success", "Account created successfully", [
      {
        text: "OK",
        onPress: () => router.replace("/(auth)/login"),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text onPress={() => router.back()} style={styles.back}>
              ←
            </Text>

            <Text style={styles.headerText}>Create Account</Text>
          </View>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              mobile: "",
              dob: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
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
                <Text style={styles.label}>Full Name</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Akenne"
                  placeholderTextColor="#c49883"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />

                {touched.fullName && errors.fullName && (
                  <Text style={styles.error}>{errors.fullName}</Text>
                )}

                <Text style={styles.label}>Email</Text>

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

                <Text style={styles.label}>Mobile Number</Text>

                <TextInput
                  style={styles.input}
                  placeholder="+123456789"
                  placeholderTextColor="#c49883"
                  onChangeText={handleChange("mobile")}
                  onBlur={handleBlur("mobile")}
                  value={values.mobile}
                />

                {touched.mobile && errors.mobile && (
                  <Text style={styles.error}>{errors.mobile}</Text>
                )}

                <Text style={styles.label}>Date of Birth</Text>

                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor="#c49883"
                  onChangeText={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                  value={values.dob}
                />

                {touched.dob && errors.dob && (
                  <Text style={styles.error}>{errors.dob}</Text>
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
                    />
                  </TouchableOpacity>
                </View>

                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}

                <Text style={styles.label}>Confirm Password</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder=". . . . . ."
                    placeholderTextColor="#b68d7a"
                    secureTextEntry={!showConfirm}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />

                  <TouchableOpacity
                    onPress={() => setShowConfirm(!showConfirm)}
                  >
                    <Image
                      source={require("../../assets/images/Vectors.png")}
                      style={styles.inputIcon}
                    />
                  </TouchableOpacity>
                </View>

                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                )}

                <Text style={styles.terms}>
                  By continuing, you agree to{" "}
                  <Text style={styles.link}>Terms of Use</Text> and{" "}
                  <Text style={styles.link}>Privacy Policy</Text>
                </Text>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

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
            Already have an account?{" "}
            <Text style={styles.signup} onPress={() => router.push("/login")}>
              Log in
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
    fontSize: 17,
    fontWeight: "600",
  },

  label: {
    color: "#ffffff",
    marginTop: 15,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#faf0e6",
    borderRadius: 30,
    padding: 10,
    marginTop: 7,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#faf0e6",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  inputs: {
    flex: 1,
    paddingVertical: 10,
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

  terms: {
    color: "#ffffff",
    marginTop: 15,
    fontSize: 10,
    width: 150,
    textAlign: "center",
    alignSelf: "center",
  },

  btn: {
    backgroundColor: "#f4b5a4",
    paddingVertical: 7,
    paddingHorizontal: 45,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    minWidth: 150,
  },

  btnText: {
    color: "#c2705a",
    fontWeight: "600",
  },

  or: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 9,
    fontSize: 10,
  },

  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 20,
  },

  icon: {
    width: 27,
    height: 27,
  },

  bottomText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 10,
    fontSize: 10,
  },

  signup: {
    color: "#f4b5a4",
  },

  link: {
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
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// export default function Signup() {
//   const router = useRouter();
//   const { signup } = useContext(AuthContext);

//   const [data, setData] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleSignup = async () => {
//     const {
//       "Full Name": fullName,
//       Email,
//       Mobile,
//       DOB,
//       Password,
//       "Confirm Password": confirmPassword,
//     } = data;

//     if (
//       !fullName ||
//       !Email ||
//       !Mobile ||
//       !DOB ||
//       !Password ||
//       !confirmPassword
//     ) {
//       Alert.alert("Error", "Fields can't be empty!");
//       return;
//     }

//     if (Password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }

//     await signup(data);

//     Alert.alert("Success", "Account created successfully", [
//       {
//         text: "OK",
//         onPress: () => router.replace("/(auth)/login"),
//       },
//     ]);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//        behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <Text onPress={() => router.back()} style={styles.back}>
//               ←
//             </Text>
//             <Text style={styles.headerText}>Create Account</Text>
//           </View>

//           <Text style={styles.label}>Full Name</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Akenne"
//             placeholderTextColor="#c49883"
//             onChangeText={(text) => setData({ ...data, "Full Name": text })}
//           />

//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="example@example.com"
//             placeholderTextColor="#c49883"
//             onChangeText={(text) => setData({ ...data, Email: text })}
//           />

//           <Text style={styles.label}>Mobile Number</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="+ 123 456 789"
//             placeholderTextColor="#c49883"
//             onChangeText={(text) => setData({ ...data, Mobile: text })}
//           />

//           <Text style={styles.label}>Date of Birth</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="DD /MM /YYYY"
//             placeholderTextColor="#c49883"
//             onChangeText={(text) => setData({ ...data, DOB: text })}
//           />

//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.inputs}
//               placeholder=". . . . . ."
//               placeholderTextColor="#b68d7a"
//               secureTextEntry={!showPassword}
//               onChangeText={(text) => setData({ ...data, Password: text })}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Image
//                 source={require("../../assets/images/Vectors.png")}
//                 style={styles.inputIcon}
//               />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.label}>Confirm Password</Text>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.inputs}
//               placeholder=". . . . . ."
//               placeholderTextColor="#b68d7a"
//               secureTextEntry={!showConfirm}
//               onChangeText={(text) =>
//                 setData({ ...data, "Confirm Password": text })
//               }
//             />
//             <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
//               <Image
//                 source={require("../../assets/images/Vectors.png")}
//                 style={styles.inputIcon}
//               />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.terms}>
//             By continuing, you agree to{" "}
//             <Text style={styles.link}>Terms of Use</Text> and{" "}
//             <Text style={styles.link}>Privacy Policy</Text>
//           </Text>

//           <TouchableOpacity style={styles.btn} onPress={handleSignup}>
//             <Text style={styles.btnText}>Sign Up</Text>
//           </TouchableOpacity>

//           <Text style={styles.or}>or sign up with</Text>

//           <View style={styles.social}>
//             <Image
//               source={require("../../assets/images/fb.png")}
//               style={styles.icon}
//             />
//             <Image
//               source={require("../../assets/images/google.png")}
//               style={styles.icon}
//             />
//           </View>

//           <Text style={styles.bottomText}>
//             Already have an account?{" "}
//             <Text
//               style={styles.signup}
//               onPress={() => router.push("/login")}
//             >
//               Log in
//             </Text>
//           </Text>
//         </View>
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
//     fontSize: 17,
//     fontWeight: "600",
//   },

//   label: {
//     color: "#ffffff",
//     marginTop: 15,
//     fontSize: 14,
//   },

//   input: {
//     backgroundColor: "#faf0e6",
//     borderRadius: 30,
//     padding: 10,
//     marginTop: 7,
//   },

//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#faf0e6",
//     borderRadius: 30,
//     paddingHorizontal: 10,
//     marginTop: 5,
//   },

//   inputs: {
//     flex: 1,
//     paddingVertical: 10,
//   },

//   inputIcon: {
//     width: 20,
//     height: 20,
//     tintColor: "#933407",
//   },

//   terms: {
//     color: "#ffffff",
//     marginTop: 15,
//     fontSize: 10,
//     width: 150,
//     textAlign: "center",
//     alignSelf: "center",
//   },

//   btn: {
//     backgroundColor: "#f4b5a4",
//     paddingVertical: 7,
//     paddingHorizontal: 45,
//     borderRadius: 30,
//     alignItems: "center",
//     alignSelf: "center",
//     marginTop: 30,
//     minWidth: 150,
//   },

//   btnText: {
//     color: "#c2705a",
//     fontWeight: "600",
//   },

//   or: {
//     color: "#ffffff",
//     textAlign: "center",
//     marginTop: 9,
//     fontSize: 10,
//   },

//   social: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//     gap: 20,
//   },

//   icon: {
//     width: 27,
//     height: 27,
//   },

//   bottomText: {
//     color: "#ffffff",
//     textAlign: "center",
//     marginTop: 10,
//     fontSize: 10,
//   },

//   signup: {
//     color: "#f4b5a4",
//   },

//   link: {
//     color: "#f4b5a4",
//   },
// });

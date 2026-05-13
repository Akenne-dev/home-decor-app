import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Stack, useRouter } from "expo-router";

export default function Onboarding() {
  const [page, setPage] = useState(0);
  const router = useRouter();

  const data = [
    {
      image: require("../assets/images/Rectangle-143.png"),
 
      title: "Comfortable Space",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: require("../assets/images/Rectangle-143 (1).png"),
      title: "Modern Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      image: require("../assets/images/Rectangle-table.png"),
      title: "Styled Living",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  

    {
      image: require("../assets/images/Rectangle-tablee.png"),
      title: "Relaxing Furniture",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const nextPage = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" backgroundColor="#363130" />
      <Image source={data[page].image} style={styles.image} />

      <Text style={styles.title}>{data[page].title}</Text>

      <Text style={styles.text}>{data[page].text}</Text>

      <View style={styles.bottom}>
        <View style={styles.bars}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={[styles.bar, page === i && styles.activeBar]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            if (page < data.length - 1) {
              setPage(page + 1);
            } else {
              router.replace("/launch");
            }
          }}
        >
          <Text style={styles.nextText}>
            {page === data.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363130",
    paddingHorizontal: 18,
    paddingTop: 50,
  },

  image: {
    width: "100%",
    height: 450,
  },

  title: {
    color: "#f4b5a4",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    textAlign: "center",
  },

  text: {
    color: "#ffffff",
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 90,
    paddingHorizontal: 10,
  },

  bars: {
    flexDirection: "row",
    gap: 5,
  },

  bar: {
    height: 6,
    width: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },

  activeBar: {
    width: 40,
    backgroundColor: "#f4b5a4",
  },

  nextBtn: {
    backgroundColor: "#f4b5a4",
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 25,
    minWidth: 100,
  },

  nextText: {
    color: "#ce7b64",

    fontWeight: "bold",
  },
 });
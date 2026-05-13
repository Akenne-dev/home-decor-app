import { Tabs, usePathname } from "expo-router";
// import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  const pathname = usePathname();
  const isSearchPage = pathname.includes("/search");
  const isListPage = pathname.includes("/list");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#363130",
          borderTopWidth: 0,
          height: 65,
        },
        tabBarActiveTintColor: "#f4b5a4",
        tabBarInactiveTintColor: "#ffffff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="homePage"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            // <Ionicons name="home" size={size} color={color} />
            <Ionicons
              name="home"
              size={size}
              color={isSearchPage ? "#f4b5a4" : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="list"
              size={size}
              color={isListPage ? "#f4b5a4" : color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            color: isListPage ? "#f4b5a4" : "#ffffff",
          },
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishList"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="banner"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="sofa"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="reviews"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

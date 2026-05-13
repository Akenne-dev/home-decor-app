// import { Stack } from "expo-router";
import "../global.css";



// export default function RootLayout() {
//   return <Stack />;
// }







import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
// import { Stack } from "expo-router";
// import "../global.css";
export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}




// export default function RootLayout() {
//   return <Stack />;
// }

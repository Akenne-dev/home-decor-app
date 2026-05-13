import { Stack } from "expo-router";

export default function ListLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="bedroom" />
      <Stack.Screen name="bestseller" />
      <Stack.Screen name="collection" />
      <Stack.Screen name="dining" />
      <Stack.Screen name="kitchen" />
      <Stack.Screen name="living" />
      <Stack.Screen name="office" />
    </Stack>
  );
}

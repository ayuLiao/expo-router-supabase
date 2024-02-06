
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Ayuliao Page Title" }} />
      <Text>Index page of Home Tab</Text>
    </View>
  );
}
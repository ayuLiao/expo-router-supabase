import { Link, Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {

    const router = useRouter()
  return (
    <View>
      <Stack.Screen options={{ headerShown: true, title: "Settings" }} />
      <Text>Index page of Settings Tab 2</Text>
      <Pressable
      onPress={() => {
        router.push({
            pathname: "/settings/page2",
            params: {
                id: '123'
            }
        })
      }}
      >
        <View style={{borderWidth: 2, padding: 4, margin: 4, borderRadius: 6, backgroundColor: "green", borderColor: "green"}}>
        <Text>Go to Page2</Text>

        </View>
      </Pressable>
    </View>
  );
}
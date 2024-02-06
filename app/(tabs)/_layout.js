import { Tabs } from "expo-router";
import { Entypo, Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={20} color={color} />,
                }}
            />
        </Tabs>
    );
}
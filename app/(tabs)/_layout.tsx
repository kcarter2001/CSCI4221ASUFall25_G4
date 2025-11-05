import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#4CAF50" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontFamily: "Poppins-Bold" },
          contentStyle: { backgroundColor: "#F5F5F5" },
        }}
      >
        {/* Main screens */}
        <Stack.Screen name="index" options={{ title: "EasyEatz" }} />
        <Stack.Screen name="recipes" options={{ title: "Healthy Recipes" }} />
        <Stack.Screen name="goals" options={{ title: "Your Goals" }} />
        <Stack.Screen name="profile" options={{ title: "Profile" }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

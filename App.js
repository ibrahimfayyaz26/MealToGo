import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  searchContainer: {
    backgroundColor: "green",
    padding: 10,
    marginTop: StatusBar.currentHeight,
  },
  listContainer: { backgroundColor: "red", padding: 10, flexGrow: 2 },
});

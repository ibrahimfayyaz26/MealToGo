import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView, Text, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import Info from "../../components/RestaurantInfo";

const Restaurant = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <Info />
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  searchContainer: {
    padding: 15,
    marginTop: StatusBar.currentHeight,
  },
  listContainer: { padding: 15, flexGrow: 2 },
});

export default Restaurant;

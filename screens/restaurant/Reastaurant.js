import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Card from "../../components/RestaurantCard";
import { Rest } from "../../servicws/RestaurantContext";
import { ActivityIndicator, Colors } from "react-native-paper";

const Restaurant = () => {
  const { restaurant, loading, error } = useContext(Rest);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
          animating={true}
          color={Colors.red800}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={restaurant}
          keyExtractor={(item) => item.placeId}
          renderItem={({ item }) => <Card restaurant={item} />}
        />
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
  listContainer: { padding: 15, flexGrow: 2, marginBottom: "30%" },
});

export default Restaurant;

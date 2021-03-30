import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Card from "../../components/RestaurantCard";
import { Rest } from "../../servicws/RestaurantContext";

const Restaurant = () => {
  const data = useContext(Rest);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data.restaurant}
          keyExtractor={(item) => toString(item)}
          renderItem={({ item }) => <Card />}
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

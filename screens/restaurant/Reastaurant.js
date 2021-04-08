import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/RestaurantCard";
import { Rest } from "../../servicws/RestaurantContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../../components/Search";

const Restaurant = ({ navigation }) => {
  const { restaurant, loading } = useContext(Rest);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <ActivityIndicator
            size="large"
            animating={true}
            color={Colors.red800}
          />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={restaurant}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Details", {
                    restaurant: item,
                  })
                }
              >
                <Card key={item.name} restaurant={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

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

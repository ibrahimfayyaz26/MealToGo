import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text,
} from "react-native";
import Card from "../../components/RestaurantCard";
import { favouriteCon } from "../../servicws/FavouriteContext";

const Favourite = ({ navigation }) => {
  const { favourite } = useContext(favouriteCon);

  if (!favourite.length) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No favourites yet</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={favourite}
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
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  listContainer: { width: "100%", padding: 5 },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

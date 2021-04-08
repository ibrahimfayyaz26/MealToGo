import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { favouriteCon } from "../servicws/FavouriteContext";

const FavouriteIcon = ({ restaurant }) => {
  const { favourite, add, remove } = useContext(favouriteCon);

  const isFav = favourite.some((x) => x.placeId == restaurant.placeId);

  return (
    <TouchableOpacity
      onPress={() => {
        isFav ? remove(restaurant) : add(restaurant);
      }}
      style={styles.container}
    >
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={24}
        color={isFav ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

export default FavouriteIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginTop: 5,
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Fav = ({ favourites, press }) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurants) => {
          return (
            <TouchableOpacity
              key={restaurants.placeId}
              onPress={() => press(restaurants)}
            >
              <View
                key={restaurants.name}
                style={{
                  padding: 5,
                  maxWidth: 120,
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ width: 110, height: 80, borderRadius: 10 }}
                  source={{ uri: restaurants.photos[0] }}
                />
                <Text>{restaurants.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Fav;

const styles = StyleSheet.create({});

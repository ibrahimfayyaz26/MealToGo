import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  Platform,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { MapSearch } from "../../components/MapSearch";

import { WebView } from "react-native-webview";

import { Rest } from "../../servicws/RestaurantContext";
import { SearchRest } from "../../servicws/locationContext";

const Map = ({ navigation }) => {
  const { searchRest } = useContext(SearchRest);
  const { restaurant } = useContext(Rest);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = searchRest;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [searchRest, viewport]);
  const Img = Platform.OS === "android";
  const Im = Img ? WebView : Image;
  return (
    <>
      <View style={styles.searchContainer}>
        <MapSearch />
      </View>
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {restaurant.map((restaurants) => {
          return (
            <Marker
              key={restaurants.name}
              title={restaurants.name}
              coordinate={{
                latitude: restaurants.geometry.location.lat,
                longitude: restaurants.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("Details", {
                    restaurant: restaurants,
                  })
                }
              >
                <View
                  style={{
                    padding: 10,
                    maxWidth: 120,
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Im
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={{ uri: restaurants.photos[0] }}
                  />
                  <Text>{restaurants.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 15,
    marginTop: StatusBar.currentHeight,
    width: "100%",
    position: "absolute",
  },
});

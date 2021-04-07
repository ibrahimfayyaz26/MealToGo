import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { MapSearch } from "../../components/MapSearch";

import { Rest } from "../../servicws/RestaurantContext";
import { SearchRest } from "../../servicws/locationContext";

const Map = () => {
  const { searchRest } = useContext(SearchRest);
  const { restaurant } = useContext(Rest);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = searchRest;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [searchRest, viewport]);
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
              <Callout>
                <View
                  style={{ padding: 10, maxWidth: 120, alignItems: "center" }}
                >
                  <Image
                    style={{ width: 120, height: 100 }}
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
    position: "absolute",
    width: "100%",
  },
});

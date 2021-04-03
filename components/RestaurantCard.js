import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { SvgXml, SvgUri } from "react-native-svg";
import star from "../assets/star";
import Open from "../assets/open";

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Burger King",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://specials-images.forbesimg.com/imageserve/602c7d25888834de668f8a76/960x0.jpg?fit=scale",
    ],
    address = "Lahore King Burger",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <View style={{ marginTop: 5, padding: 5 }}>
      <Card
        key={`${name}${restaurant.place_id}`}
        style={{ padding: 5 }}
        elevation={8}
      >
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
          <View style={styles.middle}>
            <View style={{ flexDirection: "row" }}>
              {ratingArray.map((ite) => {
                return (
                  <SvgXml
                    key={`${ite}${restaurant.place_id}`}
                    width="25"
                    height="25"
                    xml={star}
                  />
                );
              })}
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {isClosedTemporarily && (
                <Text style={{ fontSize: 17, color: "red" }}>
                  Closed Temporarily
                </Text>
              )}
              {isOpenNow && <SvgXml width="28" height="28" xml={Open} />}
              <View style={{ marginLeft: 10 }}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={{ uri: icon }}
                />
              </View>
            </View>
          </View>
          <Paragraph style={{ fontSize: 16 }}>{address}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  middle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

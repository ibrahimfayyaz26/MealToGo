import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Burger King",
    icon,
    photos = [
      "https://specials-images.forbesimg.com/imageserve/602c7d25888834de668f8a76/960x0.jpg?fit=scale",
    ],
    address = "Lahore King Burger",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={8}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph style={{ fontSize: 16 }}>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});

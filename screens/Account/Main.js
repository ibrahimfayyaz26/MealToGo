import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

const Main = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/home_bg.jpg")}
      style={styles.container}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
        }}
      >
        <LottieView
          source={require("../../assets/watermalon.json")}
          autoPlay
          loop
          key="animation"
          resizeMode="cover"
        />
      </View>
      <Text style={{ fontSize: 30 }}>Meals To Go</Text>
      <View style={styles.buttonContainer}>
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          style={{ margin: 7 }}
        >
          Login
        </Button>
        <Button
          icon="mail"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          style={{ margin: 7 }}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonContainer: {
    backgroundColor: "white",
    width: "53%",
    height: "17%",
    justifyContent: "center",
    marginTop: "5%",
    padding: 12,
  },
});

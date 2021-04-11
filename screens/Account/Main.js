import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const Main = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/home_bg.jpg")}
      style={styles.container}
    >
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
          icon="lock-open-outline"
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
    width: "45%",
    height: "15%",
    justifyContent: "center",
    marginTop: "25%",
  },
});

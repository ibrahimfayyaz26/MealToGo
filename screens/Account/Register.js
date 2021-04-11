import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const Register = () => {
  return (
    <ImageBackground
      source={require("../../assets/home_bg.jpg")}
      style={styles.container}
    >
      <Text>Register Screen</Text>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Account } from "../../servicws/AccountContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin } = useContext(Account);

  const login = () => {
    onLogin(email, password);
  };

  return (
    <ImageBackground
      source={require("../../assets/home_bg.jpg")}
      style={styles.container}
    >
      <View style={styles.loginContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={{ marginBottom: 20 }}
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry
          style={{ marginTop: 5 }}
        />
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => login()}
          style={{ margin: 10, marginTop: 25 }}
        >
          Login
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  loginContainer: {
    backgroundColor: "white",
    width: "80%",
    height: "30%",
    justifyContent: "center",
    padding: 10,
  },
});

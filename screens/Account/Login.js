import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Account } from "../../servicws/AccountContext";
import { ActivityIndicator, Colors } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, loading } = useContext(Account);

  const login = () => {
    onLogin(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
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
          {error && (
            <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
          )}
          {!loading ? (
            <Button
              icon="lock-open-outline"
              mode="contained"
              onPress={() => login()}
              style={{ margin: 10, marginTop: 25 }}
            >
              Login
            </Button>
          ) : (
            <ActivityIndicator
              animating={true}
              size="large"
              color={Colors.blue300}
            />
          )}
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 35 }}
        >
          Go Back
        </Button>
        <View style={{ height: 100 }} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  loginContainer: {
    backgroundColor: "white",
    width: "80%",
    height: "35%",
    justifyContent: "center",
    padding: 15,
  },
});

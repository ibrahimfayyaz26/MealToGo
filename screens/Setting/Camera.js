import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, TouchableOpacity, Text } from "react-native";

import { Account } from "../../servicws/AccountContext";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef();
  const { user } = useContext(Account);

  const snap = async () => {
    console.log("hello world");
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission == false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Camera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <TouchableOpacity onPress={snap}>
        <View style={{ width: "100%", height: "100%" }} />
      </TouchableOpacity>
    </Camera>
  );
};

export default CameraScreen;

import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";

import { Account } from "../../servicws/AccountContext";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(Account);

  const snap = async () => {
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

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <Camera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
};

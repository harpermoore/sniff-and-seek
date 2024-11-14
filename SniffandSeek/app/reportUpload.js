import {
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Platform,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function reportUpload() {
  const [albums, setAlbums] = useState(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [assets, setAssets] = useState([]);

  async function getAlbums() {
    if (permissionResponse.status !== "granted") {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [albums]);

  return (
    <View style={styles.container}>
      <Pressable onPress={getAlbums}>
        <View style={styles.field}>
          <FontAwesome5 name="cloud-upload-alt" size={64} color="#B50000" />
        </View>
      </Pressable>
      <Text style={styles.heading}>Upload image</Text>
      <View>
        {assets &&
          assets.map((asset) => (
            <Image source={{ uri: asset.uri }} width={50} height={50} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    marginTop: 32,
    width: 360,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderColor: "#8888",
    borderStyle: "dotted",
    borderRadius: 16,
  },
  heading: {
    fontSize: 18,
  },
  img: {
    width: 100,
    height: 150,
  },
});

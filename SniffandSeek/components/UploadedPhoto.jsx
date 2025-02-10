import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function UploadedPhoto({ uri, image, setImage, item }) {
  const handleRemoveImg = (assetId) => {
    setImage((prevImageList) =>
      prevImageList.filter((item) => item.assetId !== assetId)
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.img} />
      <Pressable onPress={() => handleRemoveImg(item.assetId)}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#8888",
            paddingHorizontal: 24,
            paddingVertical: 6,
            borderRadius: 12,
          }}
        >
          <Text>Remove</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  img: {
    marginTop: 12,
    width: 100,
    height: 160,
    borderRadius: 24,
    borderCurve: "continuous",
    resizeMode: "center",
  },
});

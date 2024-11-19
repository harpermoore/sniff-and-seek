import {
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Dropdown } from "react-native-element-dropdown";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import CTAbtn from "../components/CTAbtn";
import { Input } from "@rneui/themed";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

const dropdownData = [
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Kitten", value: "kitten" },
  { label: "Puppy", value: "puppy" },
  { label: "Other", value: "other" },
];

export default function reportUpload() {
  const [image, setImage] = useState([]);
  const [selectedAnimalType, setAnimalType] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const [isCameraOpened, setIsCameraOpened] = useState(false);
  const [comfirmedImg, setConfirmImg] = useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    return location;
  };

  const reverseGeocode = async (latitude, longitude) => {
    const results = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    console.log(results);
    return results;
  };

  const handleLocation = async () => {
    try {
      const location = await getCurrentLocation();

      if (!location) return;

      const { latitude, longitude } = location.coords;

      // 反向地理編碼
      const result = await reverseGeocode(latitude, longitude);

      if (result && result.length > 0) {
        const formattedAddress = `${result[0].city}, ${result[0].postalCode}`;
        setAddress(formattedAddress);
        setIsLoading(false);
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("get location fail", error);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],

      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets);
    }
  };

  //camera permission
  const getCameraPermission = async () => {
    if (!permission || !permission.granted) {
      const { granted } = await requestPermission();
      if (!granted) {
        alert("Require camera permission.");
        return;
      }
    }
    setIsCameraOpened(true);
  };

  const takePic = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo);
      setIsCameraOpened(false);
    }
  };

  const handleUpload = async () => {
    setConfirmImg(capturedImage.uri);
    setCapturedImage(null);
  };

  //conditional rendering based on camera is opened or not
  if (!isCameraOpened && !capturedImage) {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <View style={styles.container}>
          <Pressable onPress={pickImage}>
            <View style={styles.field}>
              <Text style={styles.heading}>Upload image</Text>
              <FontAwesome5 name="cloud-upload-alt" size={24} color="#B50000" />
            </View>
          </Pressable>

          <Text style={styles.heading}>Selected Images</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.imgContainer}
          >
            {image
              ? image.map((item, index) => (
                  <Image
                    key={index}
                    style={styles.img}
                    source={{ uri: item.uri }}
                  />
                ))
              : null}
          </ScrollView>

          {/* Camera setting */}
          <Pressable onPress={getCameraPermission}>
            <View style={styles.field}>
              <Text style={styles.heading}>Upload photos by camera</Text>
              <AntDesign name="camerao" size={24} color="#B50000" />
            </View>
          </Pressable>

          <Text style={styles.heading}>Upload Images</Text>
          {comfirmedImg ? (
            <Image style={styles.img} source={{ uri: comfirmedImg }} />
          ) : null}

          {/* form section */}
          <View style={styles.inputBlock}>
            <View style={styles.userInfo}>
              <FontAwesome name="user" size={22} color="black" />
              <Text style={styles.heading}>User Name</Text>
            </View>
            <Text style={styles.text}>default user ID</Text>
          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.inputBlock}>
              <Text style={styles.heading}>Location</Text>
              <Pressable style={styles.btn} onPress={handleLocation}>
                <Text>Use current location</Text>
              </Pressable>

              <Text>{isLoading ? "Location loading..." : address}</Text>
              <Input
                inputContainerStyle={styles.input}
                placeholder="Enter your location"
                leftIcon={
                  <Entypo name="location-pin" size={24} color="black" />
                }
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.heading}>Date</Text>

              <Input
                inputContainerStyle={styles.input}
                placeholder="MM/DD/YYYY"
                leftIcon={<Fontisto name="date" size={20} color="black" />}
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.heading}>Animal Type</Text>

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={dropdownData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                value={selectedAnimalType}
                onChange={(item) => {
                  setAnimalType(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color="black"
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.heading}>Description</Text>
              <TextInput style={styles.desField} />
            </View>
          </View>

          <CTAbtn>Preview application</CTAbtn>
        </View>
      </ScrollView>
    );
  } else {
    if (isCameraOpened) {
      return (
        <View style={styles.cameraContainer}>
          <CameraView ref={cameraRef} style={styles.camera} facing={"back"}>
            {/* take picture btn */}
            <Pressable style={styles.cameraBtn} onPress={takePic}>
              <AntDesign name="camerao" size={48} color="#ffff" />
            </Pressable>

            {/* back btn */}
            <Pressable style={styles.backBtn}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#ffff" />
                <Text style={{ fontSize: 18, color: "#ffff" }}>Back</Text>
              </View>
            </Pressable>
          </CameraView>
        </View>
      );
    } else if (capturedImage) {
      return (
        <View style={{ flex: 1 }}>
          <Image style={{ flex: 1 }} source={{ uri: capturedImage.uri }} />

          <Pressable style={styles.uploadBtn} onPress={handleUpload}>
            <Text style={{ fontSize: 28, color: "#ffff" }}>Upload</Text>
          </Pressable>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 24,
    width: 360,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B50000",
    borderRadius: 16,
  },
  heading: {
    fontSize: 18,
    paddingHorizontal: 12,
  },
  img: {
    width: 100,
    height: 160,
    borderRadius: 24,
    borderCurve: "continuous",
    marginLeft: 12,
    resizeMode: "center",
  },
  imgContainer: {
    flexDirection: "row",
    height: 200,
    marginTop: 32,
  },
  input: {
    width: 360,
    height: 48,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#8888",
    borderRadius: 16,
    borderCurve: "continuous",
    padding: 8,
  },
  inputBlock: {
    flexDirection: "column",
    marginTop: 32,
    gap: 12,
  },
  dropdown: {
    width: 360,
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  desField: {
    marginTop: 6,
    height: 200,
    width: 360,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#8888",
    backgroundColor: "#ffff",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 24,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
    borderColor: "#8888",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    paddingLeft: 26,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 82,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
  },
  cameraBtn: {
    width: 84,
    height: 84,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ffff",
    borderRadius: 50,
  },
  backBtn: {
    position: "absolute",
    left: 12,
    top: 36,
    width: 84,
    height: 84,
  },
  uploadBtn: {
    position: "absolute",
    left: "50%",
    bottom: 48,
    transform: [{ translateX: -50 }],
    borderRadius: 12,
    backgroundColor: "#B50000",
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
});

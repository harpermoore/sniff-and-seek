import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useContext, useState } from "react";
import LikeBtn from "../components/LikeBtn";
import BasicInfo from "./BasicInfo";
import Foundation from "@expo/vector-icons/Foundation";
import { AnimalContext } from "../context/AnimalProvider";

export default function InfoSection() {
  const { animalName: name, animalID } = useContext(AnimalContext);
  const [modalVisible, setModalVisible] = useState(false);

  const Message = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Pressable onPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Saved to Favorite List!</Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    );
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center", paddingBottom: 48 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{name}</Text>

          <LikeBtn
            animalID={animalID}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>

        <BasicInfo />
        <Message />

        {/* Start adoption application button */}
        <Pressable style={styles.btn}>
          <Foundation name="paw" size={24} color="#ffff" />
          <Text style={styles.btnText}>Adopt</Text>
        </Pressable>

        <Text>Viewed History</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    width: 390,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },

  heading: {
    fontSize: 36,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 160,
    width: 260,
    height: 260,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  modalText: {
    color: "#000",
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#B50000",
    width: 360,
    paddingHorizontal: 24,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 24,
    gap: 18,
  },
  btnText: {
    fontSize: 24,
    color: "#ffff",
    fontWeight: "600",
  },
});

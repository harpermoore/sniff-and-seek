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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 48,
  },

  heading: {
    fontSize: 48,
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
});

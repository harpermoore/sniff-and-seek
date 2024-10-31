import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import OthersInfo from "./OthersInfo";

export default function ProfileTab() {
  const [selected, setSelected] = useState("basic");

  const RenderContent = () => {
    switch (selected) {
      case "basic":
        return <BasicInfo />;
      case "detail":
        return <DetailInfo />;
      case "others":
        return <OthersInfo />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* basic info tab  */}
        <Pressable
          style={selected == "basic" && styles.activeTab}
          onPress={() => setSelected("basic")}
        >
          <Text>Basic information</Text>
        </Pressable>
        {/* detail info tab */}
        <Pressable
          style={selected == "detail" && styles.activeTab}
          onPress={() => setSelected("detail")}
        >
          <Text>Detail information</Text>
        </Pressable>
        {/* others info tab */}
        <Pressable
          style={selected == "others" && styles.activeTab}
          onPress={() => setSelected("others")}
        >
          <Text>Others</Text>
        </Pressable>
      </View>

      <RenderContent />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 36,
    paddingHorizontal: 32,
  },
  activeTab: {
    borderBottomColor: "#B50000",
    borderBottomWidth: 2,
  },
  container: {
    marginTop: 32,
    flexDirection: "column",
  },
});

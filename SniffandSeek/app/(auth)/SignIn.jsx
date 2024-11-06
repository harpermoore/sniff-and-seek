import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useState } from "react";
import { signInWithGoogle, handleRedirectResult } from "@/service/firebaseAuth";

const googleUri = require("@/assets/images/google.png");

export default function signIn() {
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    // 處理 Firebase 的重定向結果
    const fetchData = async () => {
      const result = await handleRedirectResult();
      if (result && result.user) {
        console.log("User signed in:", result.user);
        // 在這裡可以進一步處理用戶信息，比如儲存用戶資料到狀態管理中
      } else if (result && result.errorCode) {
        console.log("Error signing in:", result.errorMessage);
        // 顯示錯誤消息或進行錯誤處理
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Enter your e-mail address here</Text>
      <Pressable
        style={
          isPressed
            ? [styles.container, styles.pressedContainer]
            : styles.container
        }
        onPress={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <TextInput style={styles.input} />
      </Pressable>

      <Text style={styles.text}>Enter your passwords</Text>
      <Pressable
        style={
          isPressed
            ? [styles.container, styles.pressedContainer]
            : styles.container
        }
        onPress={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <TextInput style={styles.input} />
      </Pressable>

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Sign in</Text>
      </Pressable>

      <Text
        style={{
          marginTop: 12,
          fontsize: 12,
          textDecorationLine: "underline",
          color: "#000",
        }}
      >
        Forget your passwords?
      </Text>

      {/* Sing in with Google */}
      <Pressable style={styles.googleBtn} onPress={signInWithGoogle}>
        <Image style={styles.img} source={googleUri} />
        <Text>Sing in with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  container: {
    marginTop: 12,
    width: 300,
    height: 42,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    borderCurve: "continues",
  },
  pressedContainer: {
    borderWidth: 1.5,
    borderColor: "#dfdfdf",
  },
  input: {
    flex: 1,
  },
  text: {
    marginTop: 12,
    fontSize: 18,
  },
  btn: {
    marginTop: 32,
    paddingHorizontal: 120,
    paddingVertical: 16,
    backgroundColor: "#B50000",
    borderRadius: 32,
    borderCurve: "continues",
  },
  btnText: {
    color: "#ffff",
    fontSize: 24,
  },
  googleBtn: {
    marginTop: 30,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  img: {
    width: 24,
    height: 24,
  },
});

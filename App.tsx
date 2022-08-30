import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Account from "./src/components/account";
import Posts from "./src/components/posts";
import Redux from "./src/redux/context";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Redux store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Account />
        <Posts />
      </View>
    </Redux>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import * as React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/index";

const App = () => {
  return (
    <SafeAreaView style={{ flex: "1" }}>
      <Navigation />
    </SafeAreaView>
  );
};
export default App;

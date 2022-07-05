import * as React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/index";
// import { MySafeAreaView } from "./styled";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FontStyles /> */}
      <Navigation />
    </SafeAreaView>
  );
};
export default App;

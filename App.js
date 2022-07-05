import * as React from "react";
import Navigation from "./src/navigation/index";
import { FontStyles, MySafeAreaView } from "./styled";

const App = () => {
  return (
    <MySafeAreaView>
      <FontStyles />
      <Navigation />
    </MySafeAreaView>
  );
};
export default App;

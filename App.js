import * as React from "react";
import Navigation from "./src/navigation/index";
import { MySafeAreaView } from "./Styled";

const App = () => {
  return (
    <MySafeAreaView>
      {/* <FontStyles /> */}
      <Navigation />
    </MySafeAreaView>
  );
};
export default App;

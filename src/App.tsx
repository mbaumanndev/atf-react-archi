import React from "react";
import { Deck } from "./components/Reveal";
import Slides from "./slides";

function App() {
  return (
    <Deck
      options={{
        controls: true,
        progress: true,
        center: true,
        hash: true,
      }}
    >
      <Slides />
    </Deck>
  );
}

export default App;

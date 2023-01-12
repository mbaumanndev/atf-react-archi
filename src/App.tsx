import React from "react";
import { Deck } from "./components/Reveal";
import Slides from "./slides";

import {MDXProvider} from '@mdx-js/react'

import { Mermaid } from "mdx-mermaid/lib/Mermaid";

const components = {
  mermaid: Mermaid
}

function App() {
  return (
    <MDXProvider components={components}>
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
    </MDXProvider>
  );
}

export default App;

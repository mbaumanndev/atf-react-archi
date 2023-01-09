import React, { PropsWithChildren, useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealSearch from "reveal.js/plugin/search/search";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import Logo from "../Logo";

type DeckProps = PropsWithChildren<{
  options?: Reveal.Options;
}>;
export default function Deck({ options, children }: DeckProps) {
  const deck = useRef<Reveal.Api>();

  useEffect(() => {
    if (!deck.current) {
      deck.current = new Reveal({
        ...options,
        plugins: [
          RevealZoom,
          RevealNotes,
          RevealSearch,
          RevealMarkdown,
          RevealHighlight,
        ],
      });
      deck.current.initialize();
    }
  }, [options]);

  return (
    <div className="reveal">
      <div
        style={{
          position: "absolute",
          left: "10px",
        }}
      >
        <Logo />
      </div>
      <div className="slides">{children}</div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          fontSize: "28px",
        }}
      >
        Maxime Baumann
      </div>
    </div>
  );
}

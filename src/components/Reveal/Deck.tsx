import React, { PropsWithChildren, useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealSearch from "reveal.js/plugin/search/search";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import Logo from "../Logo";

export type DeckProps = PropsWithChildren<{
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
    <div className="reveal relative">
      <div className="absolute border-t-8 border-t-[#F2C94C] p-3 top-0 left-0 right-0">
        <Logo />
      </div>
      <div className="slides">{children}</div>
      <div className="absolute left-3 bottom-3 text-lg">Maxime Baumann</div>
    </div>
  );
}

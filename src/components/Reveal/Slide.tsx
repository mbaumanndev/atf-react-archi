import React, { PropsWithChildren } from "react";
import Reveal from "reveal.js";

export type SlideProps = PropsWithChildren<{
  readonly transition?: Reveal.Options["transition"];
}>;
export default function Slide({ children, transition = "fade" }: SlideProps) {
  return <section data-transition={transition}>{children}</section>;
}

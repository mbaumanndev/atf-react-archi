import React from "react";
import { Slide, type SlideProps } from "./Reveal";

type SlideWithTitleProps = SlideProps & {
  readonly title: React.ReactNode;
};
export default function SlideWithTitle({
  children,
  title,
  transition,
}: SlideWithTitleProps) {
  return (
    <Slide transition={transition}>
      <h3>{title}</h3>
      {children}
    </Slide>
  );
}

import React from "react";
import { withCodeRenderer } from "../components/Code";
import Slide from "../components/Reveal/Slide";
import SlideWithTitle from "../components/SlideWithTitle";
import SampleCode from "../samples/test.md";

export default function WhoisSlide() {
  return (
    <>
      <Slide>
        <SlideWithTitle title="Qui suis-je ?"></SlideWithTitle>
        <Slide>
          <SampleCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "3-5|8-10|13-15",
              }),
            }}
          />
        </Slide>
      </Slide>
    </>
  );
}

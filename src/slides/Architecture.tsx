import React from "react";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import SampleCode from "../samples/test.md";
import { withCodeRenderer } from "../components/Code";

export default function Architecture() {
  return (
    <Slide>
      <SlideWithTitle title="Architecture" />

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
  );
}

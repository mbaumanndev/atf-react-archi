import React from "react";
import AgendaSlide from "./AgendaSlide";
import ThankYouSlide from "./ThankYouSlide";
import TitleSlide from "./TitleSlide";
import WhoisSlide from "./WhoisSlide";

export default function Slides() {
  return (
    <>
      <TitleSlide />
      <AgendaSlide />
      <WhoisSlide />
      <ThankYouSlide />
    </>
  );
}

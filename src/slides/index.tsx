import React from "react";
import AgendaSlide from "./AgendaSlide";
import Architecture from "./Architecture";
import Context from "./Context";
import GoingFurther from "./GoingFurther";
import ReactSolid from "./ReactSolid";
import ThankYouSlide from "./ThankYouSlide";
import TitleSlide from "./TitleSlide";
import WhoisSlide from "./WhoisSlide";

export default function Slides() {
  return (
    <>
      <TitleSlide />
      <AgendaSlide />
      <WhoisSlide />
      <Context />
      <ReactSolid />
      <Architecture />
      <GoingFurther />
      <ThankYouSlide />
    </>
  );
}

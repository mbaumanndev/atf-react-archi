import React from "react";
import Fragment, { FragmentEffect } from "../components/Fragment";
import SlideWithTitle from "../components/SlideWithTitle";

export default function AgendaSlide() {
  return (
    <SlideWithTitle title="Sommaire">
      <ul>
        <Fragment effect={FragmentEffect.FadeUp} as="li">Qui suis-je ?</Fragment>
        <Fragment effect={FragmentEffect.FadeUp} as="li">Mise en contexte</Fragment>
        <Fragment effect={FragmentEffect.FadeUp} as="li">S.O.L.I.D. avec React</Fragment>
        <Fragment effect={FragmentEffect.FadeUp} as="li">Une première proposition d'architecture</Fragment>
        <Fragment effect={FragmentEffect.FadeUp} as="li">Aller plus loin ?</Fragment>
      </ul>
    </SlideWithTitle>
  );
}

import React from "react";
import SlideWithTitle from "../components/SlideWithTitle";

export default function AgendaSlide() {
  return <SlideWithTitle title="Sommaire">
    <ul>
      <li>Qui suis-je ?</li>
      <li>Mise en contexte</li>
      <li>S.O.L.I.D. avec React</li>
      <li>Une première proposition d'architecture</li>
      <li>Aller plus loin ?</li>
    </ul>
  </SlideWithTitle>;
}

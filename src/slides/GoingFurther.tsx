import React from "react";
import Fragment from "../components/Fragment";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";

export default function GoingFurther() {
  return (
    <Slide>
    <SlideWithTitle title="Aller plus loins ?">
      <ul>
        <Fragment as="li">Implémenter un Kernel</Fragment>
        <Fragment as="li">Programmation Reactive (RxJS)</Fragment>
        <Fragment as="li">Concevoir un framework complet</Fragment>
      </ul>
    </SlideWithTitle>
      <SlideWithTitle title="Avantages">
        <ul>
          <Fragment as="li">Code plus modulaire</Fragment>
          <Fragment as="li">Code plus simple à tester</Fragment>
          <Fragment as="li">Code peu lié à React</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Inconvénients">
        <ul>
          <Fragment as="li">Plus d'efforts en conception</Fragment>
          <Fragment as="li">Toujours un point d'entrée par App</Fragment>
          <Fragment as="li">Moins de possibilités de Lazy-Loading ?</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Notre direction">
        <ul>
          <Fragment as="li">Librairie de composants</Fragment>
          <Fragment as="li">Code partagé (Workspaces)</Fragment>
          <Fragment as="li">Deux applications distinctes</Fragment>
        </ul>
      </SlideWithTitle>
    </Slide>
  );
}

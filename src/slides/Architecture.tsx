import React from "react";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import SampleCode from "../samples/test.md";
import { withCodeRenderer } from "../components/Code";
import Fragment from "../components/Fragment";

import hexaArchUrl from "../assets/Hexagonal_Architecture.svg";
import Stack from "../components/Stack";

export default function Architecture() {
  return (
    <Slide>
      <SlideWithTitle title="Proposition d'architecture" />
      <SlideWithTitle title="Clean Architecture">
        <Stack>
          <img className="fragment" src={hexaArchUrl} />
        </Stack>
      </SlideWithTitle>
      <SlideWithTitle title="Clean Architecture">
        <ul>
          <Fragment as="li">Logique contenue au coeur de l'hexagone</Fragment>
          <Fragment as="li">Implémentations spécifiques à l'exterieur</Fragment>
          <Fragment as="li">Ports et Adapters</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Système de fichier">
        <ul>
          <Fragment as="li">Un Kernel</Fragment>
          <Fragment as="li">Une couche domaine</Fragment>
          <Fragment as="li">Une couche infrastructure</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Kernel">
        <ul>
          <Fragment as="li">Evénements de base</Fragment>
          <Fragment as="li">Bases des DTO</Fragment>
          <Fragment as="li">Types utilitaires</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Domaine">
        <ul>
          <Fragment as="li">Modèles</Fragment>
          <Fragment as="li">Abstraction des repositories</Fragment>
          <Fragment as="li">Abstractions des services</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Infrastructure">
        <ul>
          <Fragment as="li">Implémentations des repositories</Fragment>
          <Fragment as="li">Implémentations des services</Fragment>
          <Fragment as="li">Interfaçage avec l'UI</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Inversion Of Control">
        <ul>
          <Fragment as="li">Améliore le faible couplage du code</Fragment>
          <Fragment as="li">Permet l'injection de dépendances</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Inversion Of Control">
        <ul>
          <Fragment as="li">Améliore le faible couplage du code</Fragment>
          <Fragment as="li">Permet l'injection de dépendance</Fragment>
        </ul>
      </SlideWithTitle>
      <SlideWithTitle title="Model View Presenter">
        <ul>
          <Fragment as="li">Dérivé du MVC</Fragment>
          <Fragment as="li">Améliore la séparation des responsabilités</Fragment>
          <Fragment as="li">Facilite la testabilité automatisée</Fragment>
        </ul>
      </SlideWithTitle>


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

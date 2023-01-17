import React from "react";
import Fragment from "../components/Fragment";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import Stack from "../components/Stack";

export default function Context() {
  return (
    <Slide>
      <SlideWithTitle title="Mise en contexte" />
      <SlideWithTitle title="L'équipe">
        <Stack>
          <Fragment title="5 développeurs">
            <ul>
              <Fragment as="li">2 avec d'autre tâches (clientèle, commercial, ...)</Fragment>
              <li>2 à temps plein</li>
              <li>1 alternant</li>
            </ul>
          </Fragment>
          <Fragment title="2 devs frontend">
            <ul>
              <li>1 avec d'autres tâches</li>
              <li>1 temps plein</li>
            </ul>
          </Fragment>
        </Stack>
      </SlideWithTitle>
      <SlideWithTitle title="Les produits">
        <Stack>
          <Fragment title="2 solutions">
            <ul>
              <li>1 SaaS : Interact Cloud</li>
              <li>1 logiciel edge : Interact Vision</li>
            </ul>
          </Fragment>
          <Fragment title="2 logiciels distincts">
            <ul>
              <li>Design différents</li>
              <li>Frameworks différents</li>
              <li>Backend différents</li>
              <li>Réponses à des besoins différents</li>
              <li>...</li>
            </ul>
          </Fragment>
          <Fragment title="Mais des similitudes">
            <ul>
              <li>Faits avec React</li>
              <li>Fonctionnalités communes</li>
              <li>Eléments de design communs</li>
              <li>Composants communs</li>
              <li>Même brique de traduction</li>
              <li>...</li>
            </ul>
          </Fragment>
        </Stack>
      </SlideWithTitle>
      <SlideWithTitle title="Un besoin"></SlideWithTitle>
    </Slide>
  );
}

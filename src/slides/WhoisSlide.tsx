import React from "react";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import imgUrl from "../assets/profile.jpeg";
import logoPsycle from "../assets/logo-psycle.svg";
import Stack from "../components/Stack";
import Fragment, { FragmentEffect } from "../components/Fragment";

export default function WhoisSlide() {
  return (
    <Slide>
      <SlideWithTitle title="Qui suis-je ?">
        <div className="flex flex-row gap-10">
          <img src={imgUrl} className="w-1/4 rounded-full" />
          <div className="flex flex-col justify-center items-start gap-0">
            <p className="font-semibold">Maxime Baumann</p>
            <ul className="list-none">
              <li>Développeur Fullstack @Psycle</li>
              <li>Enseignant Vacataire @UPJV</li>
            </ul>
          </div>
        </div>
      </SlideWithTitle>
      <SlideWithTitle title="Psycle">
        <div className="flex flex-row gap-10">
          <img src={logoPsycle} className="w-1/4 rounded-full" />
          <div className="flex flex-col justify-center items-start gap-0">
            <p className="font-semibold">Psycle Research</p>
            <ul className="list-none">
              <li>
                3 Rue de l'Anthémis
                <br />
                60200 Compiègne
              </li>
              <li>
                <a href="https://www.psycle.io/">www.psycle.io</a>
              </li>
            </ul>
          </div>
        </div>
      </SlideWithTitle>
      <SlideWithTitle title="Mon parcours">
        <Stack>
          <Fragment effect={FragmentEffect.FadeInThenOut} title="Etudes">
            <ul>
              <li>DUT Informatique - UPJV - 2016</li>
              <li>LP RGI - UPJV - 2017</li>
              <li>Master CCM - UPJV - 2019</li>
            </ul>
          </Fragment>
          <Fragment effect={FragmentEffect.FadeInThenOut} title="Spécialités">
            <ul>
              <li>Dev web Fullstack</li>
              <li>Cloud Computing</li>
              <li>Architecture Technique</li>
              <li>Web Design</li>
            </ul>
          </Fragment>
          <Fragment effect={FragmentEffect.FadeInThenOut} title="Certifications">
            <ul>
              <li>MCSA: Web Applications</li>
              <li>MCSD: App Builder</li>
              <li>Azure Developer Associate</li>
              <li>Azure Solutions Architect Expert</li>
            </ul>
          </Fragment>
          <Fragment effect={FragmentEffect.FadeIn} title="Jobs">
            <ul>
              <li>Consultant @ B&D Amiens (2016-2021)</li>
              <li>Enseignant Vacataire @ UPJV (2018+)</li>
              <li>Dev Fullstack @ Psycle (2021+)</li>
            </ul>
          </Fragment>
        </Stack>
      </SlideWithTitle>
    </Slide>
  );
}

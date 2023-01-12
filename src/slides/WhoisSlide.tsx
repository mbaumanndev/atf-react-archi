import React from "react";
import { withCodeRenderer } from "../components/Code";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import SampleCode from "../samples/test.md";
import SampleGraph from "../samples/graph.md";
import SampleGraph2 from "../samples/graph2.md";
import imgUrl from "../assets/profile.jpeg";
import logoPsycle from "../assets/logo-psycle.svg";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";

export default function WhoisSlide() {
  return (
    <>
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
          <div className="r-stack">
            <div className="fragment fade-in-then-out">
              <h4>Etudes</h4>
              <ul>
                <li>DUT Informatique - UPJV - 2016</li>
                <li>LP RGI - UPJV - 2017</li>
                <li>Master CCM - UPJV - 2019</li>
              </ul>
            </div>
            <div className="fragment fade-in-then-out">
              <h4>Spécialités</h4>
              <ul>
                <li>Dev web Fullstack</li>
                <li>Cloud Computing</li>
                <li>Architecture Technique</li>
                <li>Web Design</li>
              </ul>
            </div>
            <div className="fragment fade-in-then-out">
              <h4>Certifications</h4>
              <ul>
                <li>MCSA: Web Applications</li>
                <li>MCSD: App Builder</li>
                <li>Azure Developer Associate</li>
                <li>Azure Solutions Architect Expert</li>
              </ul>
            </div>
            <div className="fragment fade-in-then-out">
              <h4>Jobs</h4>
              <ul>
                <li>Consultant @ B&D Amiens (2016-2021)</li>
                <li>Enseignant Vacataire @ UPJV (2018+)</li>
                <li>Dev Fullstack @ Psycle (2021+)</li>
              </ul>
            </div>
          </div>
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
        <Slide>
          <SampleGraph />
        </Slide>
        <Slide>
          <SampleGraph2 />
        </Slide>
        <Slide>
          <Mermaid
            chart={`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`}
          />
        </Slide>
      </Slide>
    </>
  );
}

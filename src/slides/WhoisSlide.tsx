import React from "react";
import { withCodeRenderer } from "../components/Code";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import SampleCode from "../samples/test.md";
import SampleGraph from "../samples/graph.md";
import SampleGraph2 from "../samples/graph2.md";
import imgUrl from "../assets/profil.jpeg";

export default function WhoisSlide() {
  return (
    <>
      <Slide>
        <SlideWithTitle title="Qui suis-je ?">
          <div className="flex flex-row gap-10">
            <img src={imgUrl} className="w-1/4 rounded-full" />
            <div className="flex flex-col justify-center items-start gap-0">
              <ul className="list-none">
                <li>
                  <b>Maxime Baumann</b>
                </li>
                <li>Développeur Fullstack @Psycle</li>
                <li>Enseignant Vacataire @UPJV</li>
              </ul>
            </div>
          </div>
        </SlideWithTitle>
        <SlideWithTitle title="Mon parcours">
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="">Etudes</div>
            <div className="">Spécialités</div>
            <div className="">Certifications</div>
            <div className="">Jobs</div>
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
      </Slide>
    </>
  );
}

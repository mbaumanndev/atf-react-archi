import React from "react";
import SlideWithTitle from "../components/SlideWithTitle";

import SampleCode from "../samples/test.md";
import { withCodeRenderer } from "../components/Code";
import { Slide } from "../components/Reveal";

export default function ReactSolid() {
  return (
    <Slide>
      <SlideWithTitle title="S.O.L.I.D. et React" />
      <SlideWithTitle title="Single Responsability Principle">
        <em>
          Une classe, une fonction ou une méthode doit avoir une et une seule
          responsabilité.
        </em>
      </SlideWithTitle>
      <SlideWithTitle title="Single Responsability Principle">
        <SampleCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-5|8-10|13-15",
            }),
          }}
        />
      </SlideWithTitle>

      <SlideWithTitle title="Open/Closed Principle">
        <em>
          Une entité applicative (classe, fonction, module, ...) doit être
          fermée à la modification mais ouverte à l'extension.
        </em>
      </SlideWithTitle>
      <SlideWithTitle title="Open/Closed Principle">
        <SampleCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-5|8-10|13-15",
            }),
          }}
        />
      </SlideWithTitle>

      <SlideWithTitle title="Liskov substitution principle">
        <em>
          Une instance de type T doit pouvoir être remplacée par une instance de
          type G, tel que G sous-type de T, sans que cela ne modifie la
          cohérence du programme.
        </em>
      </SlideWithTitle>
      <SlideWithTitle title="Liskov substitution principle">
        <SampleCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-5|8-10|13-15",
            }),
          }}
        />
      </SlideWithTitle>

      <SlideWithTitle title="Interface segregation principle">
        <em>
          Préférer plusieurs interfaces spécifiques pour chaque client plutôt
          qu'une seule interface générale.
        </em>
      </SlideWithTitle>
      <SlideWithTitle title="Interface segregation principle">
        <SampleCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-5|8-10|13-15",
            }),
          }}
        />
      </SlideWithTitle>

      <SlideWithTitle title="Dependency inversion principle">
        <em>Il faut dépendre des abstractions, pas des implémentations.</em>
      </SlideWithTitle>
      <SlideWithTitle title="Dependency inversion principle">
        <SampleCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-5|8-10|13-15",
            }),
          }}
        />
      </SlideWithTitle>
    </Slide>
  );
}

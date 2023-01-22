import React from "react";
import SlideWithTitle from "../components/SlideWithTitle";
import { withCodeRenderer } from "../components/Code";
import { Slide } from "../components/Reveal";

import TodoAppInitialCode from "../samples/todo_app_initial.md"
import TodoAppSrpCode from "../samples/todo_app_srp.md"
import TodoAppOcpCode from "../samples/todo_app_ocp.md"
import TodoAppOcp2Code from "../samples/todo_app_ocp_2.md"
import TodoAppLspCode from "../samples/todo_app_lsp.md"
import TodoAppIspCode from "../samples/todo_app_isp.md"
import TodoAppIsp2Code from "../samples/todo_app_isp_2.md"
import TodoAppIsp3Code from "../samples/todo_app_isp_3.md"
import TodoAppDipCode from "../samples/todo_app_dip.md"
import TodoAppDip2Code from "../samples/todo_app_dip_2.md"

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
        <TodoAppInitialCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "1-36|7-14|16-24|26-33",
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Single Responsability Principle">
        <TodoAppSrpCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "1-48|4-10|12-24|26-34|36-45",
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
        <TodoAppSrpCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "26-34",
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Open/Closed Principle">
        <TodoAppOcpCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "3|4|6-12|21",
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Open/Closed Principle">
        <TodoAppOcp2Code
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-7|15",
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
        <TodoAppLspCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "1-4|2"
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
        <TodoAppIspCode
          components={{
            code: withCodeRenderer({
              lineNumbers: true,
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Interface segregation principle">
        <TodoAppIsp2Code
          components={{
            code: withCodeRenderer({
              lineNumbers: true,
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Interface segregation principle">
        <TodoAppIsp3Code
          components={{
            code: withCodeRenderer({
              lineNumbers: "3-9|11-21",
            }),
          }}
        />
      </SlideWithTitle>

      <SlideWithTitle title="Dependency inversion principle">
        <em>Il faut dépendre des abstractions, pas des implémentations.</em>
      </SlideWithTitle>
      <SlideWithTitle title="Dependency inversion principle">
        <TodoAppDipCode
          components={{
            code: withCodeRenderer({
              lineNumbers: "1-29|2|4-12",
            }),
          }}
        />
      </SlideWithTitle>
      <SlideWithTitle title="Dependency inversion principle">
        <TodoAppDip2Code
          components={{
            code: withCodeRenderer({
              lineNumbers: "1-47|1|2|4-8|25-35|37-47",
            }),
          }}
        />
      </SlideWithTitle>
    </Slide>
  );
}

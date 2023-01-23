import React from "react";
import { Slide } from "../components/Reveal";
import SlideWithTitle from "../components/SlideWithTitle";
import { withCodeRenderer } from "../components/Code";
import Fragment, { FragmentEffect } from "../components/Fragment";

import hexaArchUrl from "../assets/Hexagonal_Architecture.svg";
import Stack from "../components/Stack";

import HexaDomainModelCode from "../samples/hexa/domain_model.md";
import HexaDomainRepoCode from "../samples/hexa/domain_repo.md";
import HexaDomainServiceCode from "../samples/hexa/domain_service.md";
import HexaInfraRepoCode from "../samples/hexa/infra_repo.md";
import HexaInfraServiceCode from "../samples/hexa/infra_service.md";
import HexaInfraPresenterCode from "../samples/hexa/infra_presenter.md";
import HexaInfraViewCompCode from "../samples/hexa/infra_view_component.md";
import HexaInfraIocCode from "../samples/hexa/infra_view_ioc.md";
import HexaAppIocCode from "../samples/hexa/app_ioc.md";
import HexaAppBootstrapCode from "../samples/hexa/app_bootstrap.md";

export default function Architecture() {
  return (
    <Slide>
      <SlideWithTitle title="Proposition d'architecture" />
      <SlideWithTitle title="Clean Architecture">
        <Stack>
          <img className="fragment" src={hexaArchUrl} />
        </Stack>
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
      <SlideWithTitle title="Code Domaine">
        <Fragment title="Modèle">
          <HexaDomainModelCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-10|1-3|5-10",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Domaine">
        <Fragment title="Repository">
          <HexaDomainRepoCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-3",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Domaine">
        <Fragment title="Service">
          <HexaDomainServiceCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-36|3-8|10-24|27-36|1|26,30|30-31|34",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Infrastructure">
        <Fragment title="Repository">
          <HexaInfraRepoCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-16|1,3,8|5,14",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Infrastructure">
        <Fragment title="Service">
          <HexaInfraServiceCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-35|1|3,8,9|7-24|9,15-23|26-32",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code applicatif">
        <Fragment title="IoC">
          <HexaAppIocCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-7|3",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Infrastructure">
        <Fragment title="IoC côté vue">
          <HexaInfraIocCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-29|1|6-12|16|18-20|22-27",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Infrastructure">
        <Fragment title="Presenter">
          <HexaInfraPresenterCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-36|1-6|8-15|15-20|21-34",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Infrastructure">
        <Fragment title="Vue">
          <HexaInfraViewCompCode
            components={{
              code: withCodeRenderer({
                lineNumbers: "1-18|1-3|18",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
      <SlideWithTitle title="Code Applicatif">
        <Fragment title="Bootstrap de l'application">
          <HexaAppBootstrapCode
            components={{
              code: withCodeRenderer({
                lineNumbers:
                  "1-63|2|3|4|5|7|9|11-19|21-40|24,28|33-40|42-50|51|53-61",
              }),
            }}
          />
        </Fragment>
      </SlideWithTitle>
    </Slide>
  );
}

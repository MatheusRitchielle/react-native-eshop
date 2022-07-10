import React from "react";
import TextoDinamico from "../Texts/index";
import { ContainerHeader, ImageHeader } from "./styled";

const cover = require("../../../assets/images/category.png");

export function ProductListHeader() {
  return (
    <>
      <ImageHeader source={cover} />
      <ContainerHeader>
        <TextoDinamico fColor="#fff" fSize="25px" mBottom=" 10px">
          Lista de Produtos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </TextoDinamico>
      </ContainerHeader>
    </>
  );
}
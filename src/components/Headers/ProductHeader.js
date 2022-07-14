import React from "react";
import { Image, useWindowDimensions } from "react-native";
import TextoDinamico from "../Texts/index";
import { ContainerHeader } from "./styled";

const cover = require("../../../assets/images/logo-product.png");
const dimensions = {
  with: 900,
  height: 450,
};

const ratio = dimensions.height / dimensions.with;
export function ProductHeader() {
  const window = useWindowDimensions();

  const width = window.width;
  const height = width * ratio;

  return (
    <>
      <Image style={{ width, height }} source={cover} />
      <ContainerHeader>
        <TextoDinamico fColor="#fff" fSize="30px" mBottom=" 10px">
          Moda Streetwear
        </TextoDinamico>
      </ContainerHeader>
    </>
  );
}

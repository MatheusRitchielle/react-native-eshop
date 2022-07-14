import React from "react";
import ContainerDinamico from "../../components/Containers/index";
import { CustomTitle } from "../../components/Texts/styled";
import { AntDesign } from "@expo/vector-icons";

const Favoritos = () => {
  return (
    <ContainerDinamico>
      <AntDesign name="star" size={24} color="black" />
      <CustomTitle>Pagina Favoritos</CustomTitle>
    </ContainerDinamico>
  );
};

export default Favoritos;

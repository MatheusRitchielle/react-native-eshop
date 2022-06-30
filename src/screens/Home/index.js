import React from "react";

import ContainerDinamico from "../../components/CustomContainer";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { Ionicons } from "@expo/vector-icons";
import Slider from "../../components/Slider";

const Principal = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <Ionicons name="home" size={24} color="black" />
      <CustomTitle>Pagina Principal</CustomTitle>
      <Slider />
    </ContainerDinamico>
  );
};

export default Principal;

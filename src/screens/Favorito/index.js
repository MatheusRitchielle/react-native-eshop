import React from "react";
import { View } from "react-native";
import ContainerDinamico from "../../components/CustomContainer";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { AntDesign } from "@expo/vector-icons";

const Favoritos = () => {
  return (
    <ContainerDinamico>
      <AntDesign name="star" size={24} color="black" />
      <CustomTitle>Pagina Favoritos</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </ContainerDinamico>
  );
};

export default Favoritos;

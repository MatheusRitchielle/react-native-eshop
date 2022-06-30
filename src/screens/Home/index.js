import React from "react";
import { View } from "react-native";
import ContainerDinamico from "../../components/CustomContainer";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { Ionicons } from "@expo/vector-icons";

const Principal = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <Ionicons name="home" size={24} color="black" />
      <CustomTitle>Pagina Principal</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </ContainerDinamico>
  );
};

export default Principal;

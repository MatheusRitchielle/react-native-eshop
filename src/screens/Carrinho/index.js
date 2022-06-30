import React from "react";
import { View } from "react-native";
import ContainerDinamico from "../../components/CustomContainer";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { AntDesign } from "@expo/vector-icons";

const Carrinho = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <AntDesign name="shoppingcart" size={24} color="black" />
      <CustomTitle>Pagina Carrinho</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </ContainerDinamico>
  );
};

export default Carrinho;

import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { AntDesign } from "@expo/vector-icons";

const Favoritos = () => {
  return (
    <CustomContainer>
      <AntDesign name="star" size={24} color="black" />
      <CustomTitle>Pagina Favoritos</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </CustomContainer>
  );
};

export default Favoritos;

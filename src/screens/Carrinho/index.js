import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { AntDesign } from "@expo/vector-icons";

const Carrinho = ({ navigation }) => {
  return (
    <CustomContainer>
      <AntDesign name="shoppingcart" size={24} color="black" />
      <CustomTitle>Pagina Carrinho</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </CustomContainer>
  );
};
const styles = StyleSheet.create({
  root: {},
});

export default Carrinho;

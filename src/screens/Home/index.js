import React from "react";
import { View } from "react-native";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { Ionicons } from "@expo/vector-icons";

const Principal = ({ navigation }) => {
  return (
    <CustomContainer>
      <Ionicons name="home" size={24} color="black" />
      <CustomTitle>Pagina Principal</CustomTitle>
      <View style={{ marginTop: 20 }}></View>
    </CustomContainer>
  );
};

export default Principal;

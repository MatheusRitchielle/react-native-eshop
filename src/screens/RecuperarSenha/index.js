import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";

const RecuperaSenha = ({ navigation }) => {
  return (
    <CustomContainer>
      <CustomTitle>Recuperar senha</CustomTitle>
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="E-mail" />
        <InnerText placeholder="CPF" />
        <PrimaryButton onPress={() => navigation.navigate("Login")}>
          <CustomText>Recuperar</CustomText>
        </PrimaryButton>
      </View>
    </CustomContainer>
  );
};

export default RecuperaSenha;

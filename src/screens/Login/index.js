import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import {  PrimaryButton,  SecondaryButton } from "../../components/CustomButton/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";

const Login = ({ navigation }) => {
  return (
    <CustomContainer>
      <CustomTitle>Login</CustomTitle>
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="username" />
        <InnerText placeholder="password" />

        <SecondaryButton onPress={() => navigation.navigate("Recuperar Senha")}>
          <CustomText style={{ color: "#646464" }}>Esqueci a senha</CustomText>
        </SecondaryButton>

        <PrimaryButton onPress={() => navigation.navigate("Menu Principal")}>
          <CustomText>Login</CustomText>
        </PrimaryButton>

        <SecondaryButton
          style={{ alingSelf: "center" }}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <CustomText style={{ color: "#646464" }}>Criar Conta</CustomText>
        </SecondaryButton>
      </View>
    </CustomContainer>
  );
};

export default Login;

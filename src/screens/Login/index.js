import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/CustomButton/styles";

import ContainerDinamico from "../../components/CustomContainer";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/CustomText";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InnerText placeholder="Senha" secureTextEntry={true} />

      <SecondaryButton onPress={() => navigation.navigate("Recuperar Senha")}>
        <CustomText>Esqueci a senha</CustomText>
      </SecondaryButton>
      <PrimaryButton onPress={() => navigation.navigate("Rotas")}>
        <CustomText>Entrar</CustomText>
      </PrimaryButton>
      <SecondaryButton
        style={{ width: 100 }}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <TextoDinamico fSize="14px">Criar Conta</TextoDinamico>
      </SecondaryButton>
    </ContainerDinamico>
  );
};

export default Login;

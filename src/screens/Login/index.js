import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import ContainerDinamico from "../../components/CustomContainer";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/CustomButton/styles";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/CustomText";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InnerText placeholder="Senha" secureTextEntry={true} />

      <SecondaryButton
        style={{ textAlign: "left" }}
        onPress={() => navigation.navigate("Recuperar Senha")}
      >
        <TextoDinamico fSize="14px">Esqueci a senha</TextoDinamico>
      </SecondaryButton>
      <View style={{ marginTop: 70 }}>
        <PrimaryButton onPress={() => navigation.navigate("Menu Principal")}>
          <TextoDinamico>Entrar</TextoDinamico>
        </PrimaryButton>

        <SecondaryButton
          style={{ width: 100 }}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <TextoDinamico fSize="14px">Criar Conta</TextoDinamico>
        </SecondaryButton>
      </View>
    </ContainerDinamico>
  );
};

export default Login;

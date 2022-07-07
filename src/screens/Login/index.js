import React from "react";
import { InnerText } from "../../components/Inputs/styled";
import ContainerDinamico from "../../components/Containers/index";
import { LogoHorizontal } from "../../components/Images/styled";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/Texts/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import CustomButton from "../../components/Buttons/SecondaryButton";
import InputEye from "../../components/Inputs/InputEye";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InputEye placeholder="Senha" secureTextEntry={true} />

      <CustomButton
        onUserPress={() => {
          navigation.navigate("Recuperar Senha");
        }}
      >
        <TextoDinamico fSize="15px" alignSelf="flex-start">
          Esqueci a senha
        </TextoDinamico>
      </CustomButton>

      <PrincipalButton
        mTop="80px"
        onUserPress={() => navigation.navigate("Rotas")}
      >
        <TextoDinamico>Entrar</TextoDinamico>
      </PrincipalButton>
      <CustomButton
        sizeWidht="90px"
        onUserPress={() => navigation.navigate("Cadastro")}
      >
        <TextoDinamico fSize="15px">Criar Conta</TextoDinamico>
      </CustomButton>
    </ContainerDinamico>
  );
};

export default Login;

import React from "react";
import { InnerText } from "../../components/CustomInput/styles";
import ContainerDinamico from "../../components/CustomContainer";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/CustomText";
import PrincipalButton from "../../components/CustomButton/PrimaryButton";
import CustomButton from "../../components/CustomButton/SecondaryButton";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InnerText placeholder="Senha" secureTextEntry={true} />

      <CustomButton
        tAlign="left"
        onUserPress={() => {
          navigation.navigate("Recuperar Senha");
        }}
      >
        <TextoDinamico fSize="15px" alignSelf="left">
          Esqueci a senha
        </TextoDinamico>
      </CustomButton>

      <PrincipalButton
        mTop="5rem"
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

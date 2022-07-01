import React from "react";
import { InnerText } from "../../components/CustomInput/styles";
import ContainerDinamico from "../../components/CustomContainer";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/CustomText";
import PrincipalButton from "../../components/CustomButton/MainButton";
import CustomButton from "../../components/CustomButton/CustomButton";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InnerText placeholder="Senha" secureTextEntry={true} />

      <CustomButton
        tAlign="left"
        onPress={() => navigation.navigate("Recuperar Senha")}
      >
        <TextoDinamico fSize="15px">Esqueci a senha</TextoDinamico>
      </CustomButton>

      <PrincipalButton onPress={() => navigation.navigate("Rotas")}>
        <TextoDinamico>Entrar</TextoDinamico>
      </PrincipalButton>
      <CustomButton
        sizeWidht="90px"
        onPress={() => navigation.navigate("Cadastro")}
      >
        <TextoDinamico fSize="15px">Criar Conta</TextoDinamico>
      </CustomButton>
    </ContainerDinamico>
  );
};

export default Login;

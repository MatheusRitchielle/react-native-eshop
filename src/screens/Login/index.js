import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
<<<<<<< HEAD
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { PrimaryButton, SecondaryButton} from "../../components/CustomButton/styles";
import colors from "../../theme/index";
=======
import ContainerDinamico from "../../components/CustomContainer";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/CustomButton/styles";
>>>>>>> leonardo
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from "../../components/CustomText";

const Login = ({ navigation }) => {
  return (
    <ContainerDinamico>
      <LogoHorizontal source={logoGrande} />

      <InnerText placeholder="Login" />
      <InnerText placeholder="Senha" secureTextEntry={true} />

<<<<<<< HEAD
        <SecondaryButton onPress={() => navigation.navigate("Recuperar Senha")}>
          <CustomText
            style={{
              color: `${colors.secondary}`,
              margin: 0,
              padding: 0,
              fontSize: 17,
            }}
          >
            Esqueci a senha
          </CustomText>
        </SecondaryButton>
        <View style={{ marginVertical: 50 }}>
          <PrimaryButton onPress={() => navigation.navigate("Rotas")}>
            <CustomText>Entrar</CustomText>
          </PrimaryButton>
=======
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
>>>>>>> leonardo

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

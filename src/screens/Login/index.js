import React from "react";
import { View, StyleSheet } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/CustomButton/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import colors from "../../theme/index";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import logoGrande from "../../../assets/images/logo-grande.png";

const Login = ({ navigation }) => {
  return (
    <CustomContainer style={{ marginTop: 50 }}>
      <LogoHorizontal source={logoGrande} />

      <View>
        <InnerText placeholder="Login" />
        <InnerText placeholder="Senha" secureTextEntry={true} />

        <SecondaryButton onPress={() => navigation.navigate("Recuperar Senha")}>
          <CustomText
            style={{
              color: `${colors.secondary}`,
              padding: 0,
              fontSize: 15,
            }}
          >
            Esqueci a senha
          </CustomText>
        </SecondaryButton>
        <View style={{ marginTop: 70 }}>
          <PrimaryButton onPress={() => navigation.navigate("Menu Principal")}>
            <CustomText>Entrar</CustomText>
          </PrimaryButton>

          <SecondaryButton
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <CustomText
              style={{
                color: `${colors.secondary}`,
                margin: 0,
                padding: 0,
                fontSize: 15,
              }}
            >
              Criar Conta
            </CustomText>
          </SecondaryButton>
        </View>
      </View>
    </CustomContainer>
  );
};

export default Login;

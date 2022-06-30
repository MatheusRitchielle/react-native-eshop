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
    <CustomContainer>
      <LogoHorizontal source={logoGrande} />

      <View>
        <InnerText placeholder="login" />
        <InnerText placeholder="senha" secureTextEntry={true} />

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

          <SecondaryButton
            style={{ alingSelf: "center" }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <CustomText
              style={{
                color: `${colors.secondary}`,
                margin: 0,
                padding: 0,
                fontSize: 15,
                marginTop: -17,
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

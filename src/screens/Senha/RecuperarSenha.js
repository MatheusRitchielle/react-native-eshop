import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/Inputs/styled";
import { CustomContainer } from "../../components/Containers/styled";
import TextoDinamico from "../../components/Texts/index";
import { LogoRecover } from "../../components/Images/styled";
import recoverImage from "../../../assets/images/recover.png";
import PrincipalButton from "../../components/Buttons/PrimaryButton";

const RecuperaSenha = ({ navigation }) => {
  return (
    <CustomContainer>
      <LogoRecover source={recoverImage} />

      <TextoDinamico>Recuperar senha</TextoDinamico>
      <View>
        <InnerText placeholder="E-mail" />
        <InnerText placeholder="CPF" keyboardType="numeric" />
        <PrincipalButton
          mTop="80px"
          onUserPress={() => navigation.navigate("CriarSenha")}
        >
          <TextoDinamico>Recuperar</TextoDinamico>
        </PrincipalButton>
      </View>
    </CustomContainer>
  );
};

export default RecuperaSenha;

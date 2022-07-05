import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/Inputs/styled";
import { CustomText } from "../../components/Texts/styled";
import { CustomContainer } from "../../components/Containers/styled";
import { CustomTitle } from "../../components/Texts/styled";
import { LogoRecover } from "../../components/Images/styled";
import recoverImage from "../../../assets/images/recover.png";
import PrincipalButton from "../../components/Buttons/PrimaryButton";

const RecuperaSenha = ({ navigation }) => {
  return (
    <CustomContainer>
      <LogoRecover source={recoverImage} />
      <CustomTitle>Recuperar senha</CustomTitle>
      <View>
        <InnerText placeholder="E-mail" />
        <InnerText placeholder="CPF" keyboardType="numeric" />
        <PrincipalButton
          mTop="5rem"
          onUserPress={() => navigation.navigate("CriarSenha")}
        >
          <CustomText>Recuperar</CustomText>
        </PrincipalButton>
      </View>
    </CustomContainer>
  );
};

export default RecuperaSenha;

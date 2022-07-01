import React from "react";
import { View } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import recoverImage from "../../../assets/images/recover.png";

const RecuperaSenha = ({ navigation }) => {
  return (
    <CustomContainer>
      <LogoHorizontal source={recoverImage} />
      <CustomTitle style={{ marginTop: 50 }}>Recuperar senha</CustomTitle>
      <View style={{ marginTop: 30 }}>
        <InnerText placeholder="E-mail" />
        <InnerText placeholder="CPF" keyboardType="numeric" />
        <PrimaryButton
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 80, padding: 0 }}
        >
          <CustomText>Recuperar</CustomText>
        </PrimaryButton>
      </View>
    </CustomContainer>
  );
};

export default RecuperaSenha;

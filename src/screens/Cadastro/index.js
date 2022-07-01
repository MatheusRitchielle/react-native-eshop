import React from "react";

import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";
import ContainerDinamico from "../../components/CustomContainer";
import PrincipalButton from "../../components/CustomButton/PrimaryButton";

const Cadastro = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
      <CustomTitle>Preencha suas informações</CustomTitle>
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="Nome" />
        <InnerText placeholder="CPF" />
        <InnerText placeholder="Data de Nascimento" />
        <InnerText placeholder="Senha" secureTextEntry={true} />
        <InnerText placeholder="Confirme sua senha" secureTextEntry={true} />

        <PrincipalButton onPress={() => navigation.navigate("Login")}>
          <CustomText onPress={() => navigation.navigate(" ")}>
            Cadastrar
          </CustomText>
        </PrincipalButton>
      </View>
      <PrincipalButton
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: 20 }}
      >
        <CustomText>Cadastrar</CustomText>
      </PrincipalButton>
    </ContainerDinamico>
  );
};

export default Cadastro;

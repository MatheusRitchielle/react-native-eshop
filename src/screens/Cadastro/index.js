import React from "react";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import ContainerDinamico from "../../components/CustomContainer";
import PrincipalButton from "../../components/CustomButton/PrimaryButton";
import { View } from 'react-native';
import TextoDinamico from './../../components/CustomText/index';

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
      </View>
      <PrincipalButton
        mTop="1rem"
        onUserPress={() => navigation.navigate("CadastroSucesso")}
      >
        <TextoDinamico>Cadastrar</TextoDinamico>
      </PrincipalButton>
    </ContainerDinamico>
  );
};

export default Cadastro;

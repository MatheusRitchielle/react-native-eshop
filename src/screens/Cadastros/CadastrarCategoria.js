import React from "react";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import ContainerDinamico from "../../components/CustomContainer";
import PrincipalButton from "../../components/CustomButton/PrimaryButton";
import { View } from 'react-native';
import TextoDinamico from './../../components/CustomText/index';

const CadastroCategoria = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
      <CustomTitle>Cadastrar Categoria</CustomTitle>
      
      <AlignContainerCadastroCategoria>
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="Nome da categoria" />
        <InnerText placeholder="Descrição da categoria" />
        </View>
    <InnerText placeholder="Senha" secureTextEntry={true} />
        <PrincipalButton
          mTop="3rem"
          onUserPress={() => navigation.navigate("CadastroSucesso")}
        >
          <TextoDinamico>Cadastrar</TextoDinamico>
        </PrincipalButton>
      </AlignContainerCadastroCategoria>
    </ContainerDinamico>
  );
};

export default CadastroCategoria;

// CadastroSucesso (perguntas pro grupo), descrição da categoria (estilizar) e botão de Cancelar (acho q n precisa)

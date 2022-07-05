import React from "react";
import ContainerDinamico from "../../components/Containers";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { CustomTitle } from "../../components/Texts/styled";
import { InnerText } from "../../components/Inputs/styled";
import { CustomText } from "../../components/Texts/index";
import { AlignContainerCadastro } from "../Cadastro/styled";
import PrincipalButton from "../../components/Buttons/PrimaryButton";

const CriarSenha = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
      <FontAwesome5 name="user-lock" size={30} color="black" />

      <CustomTitle>Digite sua nova senha</CustomTitle>
      <AlignContainerCadastro>
        <InnerText placeholder="Senha" secureTextEntry={true} />
        <Ionicons name="ios-eye-off" size={18} color="black" />
        <InnerText placeholder="Nova senha" secureTextEntry={true} />
        <Ionicons name="ios-eye-off" size={18} color="black" />
        <PrincipalButton
          mTop="3rem"
          onUserPress={() => navigation.navigate("SenhaAlterada")}
        >
          <CustomText>Alterar Senha</CustomText>
        </PrincipalButton>
      </AlignContainerCadastro>
    </ContainerDinamico>
  );
};

export default CriarSenha;

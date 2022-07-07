import React from "react";
import ContainerDinamico from "../../components/Containers";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { CustomTitle } from "../../components/Texts/styled";
import { CustomText } from "../../components/Texts/styled";
import { AlignContainerCadastro } from "../Cadastros/styled";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import InputEye from "../../components/InputEye";

const CriarSenha = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
      <FontAwesome5 name="user-lock" size={30} color="black" />

      <CustomTitle>Digite sua nova senha</CustomTitle>
      <AlignContainerCadastro>
        <InputEye placeholder="Senha" secureTextEntry={true} />
        <InputEye placeholder="Nova senha" secureTextEntry={true} />
        <PrincipalButton
          mTop="48px"
          onUserPress={() => navigation.navigate("SenhaAlterada")}
        >
          <CustomText>Alterar Senha</CustomText>
        </PrincipalButton>
      </AlignContainerCadastro>
    </ContainerDinamico>
  );
};

export default CriarSenha;

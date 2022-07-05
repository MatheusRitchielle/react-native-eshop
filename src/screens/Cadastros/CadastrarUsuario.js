import React from "react";
import { InnerText } from "../../components/Inputs/styled";
import { CustomTitle } from "../../components/Texts/styled";
import ContainerDinamico from "../../components/Containers/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import TextoDinamico from "../../components/Texts/index";
import { AlignContainerCadastro } from "./styled";

const Cadastro = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
      <CustomTitle> Preencha suas informações</CustomTitle>

      <AlignContainerCadastro>
        <InnerText placeholder="Nome" />
        <InnerText placeholder="CPF" />
        <InnerText placeholder="Data de Nascimento" />
        <InnerText placeholder="Senha" secureTextEntry={true} />
        <InnerText placeholder="Confirme sua senha" secureTextEntry={true} />
        <PrincipalButton
          mTop="3rem"
          onUserPress={() => navigation.navigate("CadastroSucesso")}
        >
          <TextoDinamico>Cadastrar</TextoDinamico>
        </PrincipalButton>
      </AlignContainerCadastro>
    </ContainerDinamico>
  );
};

export default Cadastro;

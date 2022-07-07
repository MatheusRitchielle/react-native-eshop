import React, { useState, useEffect } from "react";
import { InnerText } from "../../components/Inputs/styled";
import { CustomTitle } from "../../components/Texts/styled";
import ContainerDinamico from "../../components/Containers/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import TextoDinamico from "../../components/Texts/index";
import { AlignContainerCadastro } from "./styled";
import { ContainerCadastro } from "../../components/Containers/styled";
import colors from "../../theme/index";
import herokuApi from "../../service";

const Cadastro = ({ navigation }) => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const [ativo, setAtivo] = useState(true);
  const [usuario, setUsuario] = useState([]);
  const [visible, setVisible] = useState(true);
  const [dtNascimento, setDtNascimento] = useState("");

  const handleClick = () => {
    if (foto && nome && cpf && dtNascimento && login && senha && ativo) {
      postUser();
      return;
    }
    setVisible(!visible);
  };

  const multHandleClick = () => {
    handleClick();
    navigation.navigate("CadastroSucesso")
  }


  useEffect(() => {
    herokuApi.get("/usuario").then((response) => setUsuario(response.data));
  }, []);

  const postUser = () => {
    let postBodyRequest = {
      nome: nome,
      foto: foto,
      cpf: cpf,
      dtNascimento: dtNascimento,
      login: login,
      senha: senha,
      ativo: ativo,
    };
    herokuApi.post("/usuario", postBodyRequest);
  };
  return (
    <ContainerDinamico tAlign="center">
      <CustomTitle> Preencha suas informações</CustomTitle>
      <AlignContainerCadastro>
        <ContainerCadastro>
          <InnerText
            onChangeText={(e) => {
              setNome(e);
            }}
            placeholder="Nome"
          />
          <InnerText
            onChangeText={(e) => {
              setCpf(e);
            }}
            placeholder="CPF"
          />
          <InnerText
            onChangeText={(e) => {
              setDtNascimento(e);
            }}

            placeholder="Data de Nascimento"
          />
          <InnerText
            onChangeText={(e) => {
              setLogin(e);
            }}
            placeholder="Login"
          />
          <InnerText
            onChangeText={(e) => {
              setSenha(e);
            }}
            secureTextEntry={true}
            placeholder="Senha"
          />
          <InnerText
            onChangeText={(e) => {
              setFoto(e);
            }}
            placeholder="Foto"
          />
        </ContainerCadastro>
        <PrincipalButton

          onUserPress={multHandleClick}
          // onUserPress={handleClick}
          height="50px"
          width="120px"
          border="50px"
          mBottom="32px"
          mTop="10px"
          bColor={`${colors.secondary}`}
        >
          <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
            Cadastrar
          </TextoDinamico>
        </PrincipalButton>
      </AlignContainerCadastro>
    </ContainerDinamico>
  );
};

export default Cadastro;

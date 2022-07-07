import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import herokuApi from "../../service";
import { InnerText } from "../../components/Inputs/styled";
import { ContainerCatProd } from "../../components/Containers/styled";
import {
  SeparadorLista,
  ListaEstilizada,
  FotoContainer,
  SombraFoto,
  FotoEstilizada,
  NomeProduto,
} from "../../components/FlatList/styled";
import { ContainerCadastro } from "../../components/Containers/styled";

const RenderUsuario = ({ nome, image }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: image }} />
      </SombraFoto>
    </FotoContainer>
    <NomeProduto>
      <TextoDinamico
        fColor={`${colors.secondary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        {nome}
      </TextoDinamico>
    </NomeProduto>

    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.primary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity onClick={() => onDelete(data.id)}>
      <TextoDinamico
        fColor={`${colors.primary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Excluir
      </TextoDinamico>
    </TouchableOpacity>
  </ListaEstilizada>
);

const ListaUsuario = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const [ativo, setAtivo] = useState(true);
  const [usuario, setUsuario] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dtNascimento, setDtNascimento] = useState("");

  const handleClick = () => {
    if (foto && nome && cpf && dtNascimento && login && senha && ativo) {
      postUser();
      return;
    }
    setVisible(!visible);
  };

  const responseItem = ({ item }) => (
    <RenderUsuario nome={item.nome} image={item.foto} />
  );

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
    <ContainerCatProd>
      <FlatList
        data={usuario}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <ContainerCadastro>
        <InnerText
          onChangeText={(e) => {
            setNome(e);
          }}
          placeholder="Nome"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setCpf(e);
          }}
          placeholder="CPF"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setDtNascimento(e);
          }}

          placeholder="Data de Nascimento"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setLogin(e);
          }}
          placeholder="Login"
          style={{ display: visible ? "flex" : "none" }}
        />

        <InnerText
          onChangeText={(e) => {
            setSenha(e);
          }}
          secureTextEntry={true}
          placeholder="Senha"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setFoto(e);
          }}
          placeholder="Foto"
          style={{ display: visible ? "flex" : "none" }}
        />
      </ContainerCadastro>
      <PrincipalButton
        onUserPress={handleClick}
        height="50px"
        width="120px"
        border="50px"
        mBottom="32px"
        mTop="10px"
        bColor={`${colors.secondary}`}
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          Adicionar
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};

export default ListaUsuario;

import React, { useState, useEffect, useCallback } from "react";
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
import { Section } from './../../components/Section/styled';
import Modal from "react-native-modal"

const RenderUsuario = ({ nome, image }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: image }} />
      </SombraFoto>
    </FotoContainer>
    <NomeProduto>
      <TextoDinamico
        fColor={`${colors.cinza}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        {nome}
      </TextoDinamico>
    </NomeProduto>

    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.verde}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity onClick={() => onDelete(data.id)}>
      <TextoDinamico
        fColor={`${colors.verde}`}
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
  const [visible, setVisible] = useState(true);
  const [dtNascimento, setDtNascimento] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleClickModal = () => {
    handleClick();
    handleModal();
    // refreshPage();
  };

  return (
    <ContainerCatProd>

      <FlatList
        data={usuario}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <Modal
        style={{ alignItems: "center" }}
        isVisible={isModalVisible}
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
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
          placeholder="URL da foto"
        />
        <Section>
          <PrincipalButton
            onUserPress={handleModal}
            mTop="26px"
            height="50px"
            width="90px"
            border="50px"
            bColor={`${colors.verde}`}
          >
            <TextoDinamico fColor={`${colors.branco}`} fSize="16px">
              Fechar
            </TextoDinamico>
          </PrincipalButton>
          <PrincipalButton
            onUserPress={handleClickModal}
            mTop="26px"
            height="50px"
            width="90px"
            border="50px"
            bColor={`${colors.verde}`}
          >
            <TextoDinamico fColor={`${colors.branco}`} fSize="16px">
              Cadastrar
            </TextoDinamico>
          </PrincipalButton>
        </Section>
      </Modal>
      <PrincipalButton
        onUserPress={handleModal}
        height="50px"
        width="120px"
        border="50px"
        mBottom="32px"
        mTop="10px"
        bColor={`${colors.verde}`}
      >
        <TextoDinamico fColor={`${colors.branco}`} fSize="16px">
          Adicionar
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};


export default ListaUsuario;

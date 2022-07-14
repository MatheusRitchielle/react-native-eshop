import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import {
  SeparadorLista,
  ListaEstilizada,
  FotoContainer,
  SombraFoto,
  FotoEstilizada,
  NomeProduto,
} from "../../components/FlatList/styled";
import { ContainerCatProd } from "../../components/Containers/styled";
import herokuApi from "../../service";
import { InnerText } from "../../components/Inputs/styled";
import { Section } from './../../components/Section/styled';
import Modal from "react-native-modal"
import { UserHeader } from "../../components/Headers/UserHeader";

const ListaUsuario = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const [ativo, setAtivo] = useState(true);
  const [dtNascimento, setDtNascimento] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [visible, setVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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
      <TouchableOpacity onClick={() => deleteUser(item.id)}>
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

  const postUsuario = () => {
    let postBodyRequest = {
      nome: nome,
      foto: foto,
      cpf: cpf,
      dtNascimento: dtNascimento,
      login: login,
      senha: senha,
      ativo: ativo,
    };
    herokuApi.post("/usuario", postBodyRequest).then((res) => {
      if (res.status == 200) {
        alert("Usuário cadastrado com sucesso");
        setUsuario([
          ...usuario,
          {
            id: res.data.id,
            nome: res.data.nome,
            foto: res.data.foto,
            cpf: res.data.cpf,
            dtNascimento: res.data.dtNascimento,
            login: res.data.login,
            senha: res.data.senha,
            ativo: res.data.ativo,
          },
        ]);
      } else {
        alert("Verifique os campos preenchidos.");
      }
    });
  };

  const deleteUser = (id) => {
    const delBodyRequest = {
      id: id,
      nome: nome,
      foto: foto,
      cpf: cpf,
      dtNascimento: dtNascimento,
      login: login,
      senha: senha,
      ativo: ativo,
    };
    herokuApi.delete(`/usuario/${id}`, delBodyRequest).then((res) => {
      setUsuario((oldUsuario) =>
        oldUsuario.filter((item) => item.id != id)
      ),
        res.status == 200
          ? alert("Usuário deletado com sucesso!")
          : alert("Não foi possível deletar o usuário!");
    });
  };

  const handleClick = () => {
    if (foto && nome && cpf && dtNascimento && login && senha && ativo) {
      postUsuario();
      return;
    }
    setVisible(!visible);
  };

  const responseItem = ({ item }) => (
    <RenderUsuario
      nome={item.nome}
      image={item.foto} />
  );

  useEffect(() => {
    herokuApi.get("/usuario").then((response) => setUsuario(response.data));
  }, []);

  const handleClickModal = () => {
    handleClick();
    handleModal();
    // refreshPage();
  };

  return (
    <ContainerCatProd>
      <FlatList
        ListHeaderComponent={UserHeader}
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

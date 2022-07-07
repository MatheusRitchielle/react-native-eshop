import React, { useState, useEffect } from "react";
import { FlatList, View, Modal } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import {
  FotoContainer,
  FotoEstilizada,
  ListaEstilizada,
  NomeProduto,
  SeparadorLista,
  SombraFoto,
} from "../../components/FlatList/styled";
import { ContainerCatProd } from "../../components/Containers/styled";
import herokuApi from "../../service";
import { InnerText } from "../../components/Inputs/styled";
import { Section } from './../../components/Section/styled';

const Item = ({ nome, qtdEstoque, preco, foto }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: foto }} />
      </SombraFoto>
    </FotoContainer>
    <View>
      <NomeProduto>
        <TextoDinamico
          fColor={`${colors.secondary}`}
          fSize="12px"
          fontFamily="Verdana"
        >
          {nome}
        </TextoDinamico>
      </NomeProduto>
      <TextoDinamico
        fColor={`${colors.secondary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        {qtdEstoque} unidades
      </TextoDinamico>
      <TextoDinamico
        fColor={`${colors.secondary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        R${preco}
      </TextoDinamico>
    </View>

    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.primary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity>
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

const ListaProduto = () => {
  const [produto, setProduto] = useState([]);
  const [foto, setFoto] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [preco, setPreco] = useState("");
  const [visible, setVisible] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleClick = () => {
    if (nome && foto && qtdEstoque && preco) {
      postProduct();
      return;
    }
    setVisible(!visible);
  };

  const itemRenderizado = ({ item }) => (
    <Item
      foto={item.foto}
      nome={item.nome}
      qtdEstoque={item.qtdEstoque}
      preco={item.preco}
    />
  );

  useEffect(() => {
    herokuApi.get("/produto").then((response) => setProduto(response.data));
  }, []);

  const postProduct = () => {
    let postBodyRequest = {
      foto: foto,
      nome: nome,
      qtdEstoque: qtdEstoque,
      preco: preco,
      descricao: descricao,
    };
    herokuApi.post("/produto", postBodyRequest);
  };

  return (
    <ContainerCatProd>
      <FlatList
        data={produto}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <Modal
        isVisible={isModalVisible}
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <InnerText
          onChangeText={(e) => {
            setNome(e);
          }}
          placeholder="Nome do produto"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setDescricao(e);
          }}
          placeholder="Descrição"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setFoto(e);
          }}
          placeholder="URL da foto"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setQtdEstoque(e);
          }}
          placeholder="Quantidade em estoque"
          style={{ display: visible ? "flex" : "none" }}
        />
        <InnerText
          onChangeText={(e) => {
            setPreco(e);
          }}
          placeholder="Preco"
          style={{ display: visible ? "flex" : "none" }}
        />
        <Section>
          <PrincipalButton
            onUserPress={handleModal}
            mTop="26px"
            height="50px"
            width="120px"
            border="50px"
            bColor={`${colors.secondary}`}
          >
            <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
              Fechar
            </TextoDinamico>
          </PrincipalButton>
          <PrincipalButton
            onUserPress={handleClick}
            mTop="26px"
            height="50px"
            width="120px"
            border="50px"
            bColor={`${colors.secondary}`}
          >
            <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
              Cadastrar
            </TextoDinamico>
          </PrincipalButton>
        </Section>
      </Modal>
      <PrincipalButton
        onUserPress={handleModal}
        mTop="26px"
        height="50px"
        width="120px"
        border="50px"
        bColor={`${colors.secondary}`}
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          Adicionar
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};

export default ListaProduto;

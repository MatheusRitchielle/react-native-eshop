import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
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
import Modal from "react-native-modal";
import { ProductListHeader } from "../../components/Headers/ProductListHeader";

const RenderProduto = ({ nome, qtdEstoque, preco, image }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: image }} />
      </SombraFoto>
    </FotoContainer>
    <View>
      <NomeProduto>
        <TextoDinamico
          fColor={`${colors.cinza}`}
          fSize="12px"
          fontFamily="Verdana"
        >
          {nome}
        </TextoDinamico>
      </NomeProduto>
      <TextoDinamico
        fColor={`${colors.cinza}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        {qtdEstoque} unidades
      </TextoDinamico>
      <TextoDinamico
        fColor={`${colors.cinza}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        R${preco}
      </TextoDinamico>
    </View>

    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.verde}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity>
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

const ListaProduto = () => {
  const [categoriaId, setCategoriaId] = useState("")
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [qtdEstoque, setQtdEstoque] = useState("");
  const [produto, setProduto] = useState([]);
  const [visible, setVisible] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleClick = () => {
    if (categoriaId && descricao && nome && foto && qtdEstoque && preco) {
      postProduto();
      return;
    }
    setVisible(!visible);
  };

  const itemRenderizado = ({ item }) => (
    <RenderProduto
      image={item.foto}
      nome={item.nome}
      qtdEstoque={item.qtdEstoque}
      preco={item.preco}
    />
  );

  useEffect(() => {
    herokuApi.get("/produto").then((response) => setProduto(response.data));
  }, []);

  const postProduto = () => {
    let postBodyRequest = {
      categoriaId: categoriaId,
      descricao: descricao,
      foto: foto,
      nome: nome,
      preco: preco,
      qtdEstoque: qtdEstoque,
    };
    herokuApi.post("/produto", postBodyRequest);
  };

  const handleClickModal = () => {
    handleClick();
    handleModal();
    // refreshPage();
  };

  return (
    <ContainerCatProd>
      <FlatList
        ListHeaderComponent={ProductListHeader}
        data={produto}
        renderItem={itemRenderizado}
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
          placeholder="Nome do produto"
        />
        <InnerText
          onChangeText={(e) => {
            setCategoriaId(e);
          }}
          placeholder="Número da categoria"
        />
        <InnerText
          onChangeText={(e) => {
            setDescricao(e);
          }}
          placeholder="Descrição"
        />
        <InnerText
          onChangeText={(e) => {
            setFoto(e);
          }}
          placeholder="URL da foto"
        />
        <InnerText
          onChangeText={(e) => {
            setQtdEstoque(e);
          }}
          placeholder="Quantidade em estoque"
        />
        <InnerText
          onChangeText={(e) => {
            setPreco(e);
          }}
          placeholder="Preco"
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

export default ListaProduto;

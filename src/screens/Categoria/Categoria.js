import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
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
import { CategoryHeader } from "../../components/Headers/CategoryHeader";
import Modal from "react-native-modal"
import { Section } from './../../components/Section/styled';

const ListaCategoria = ({ navigation }) => {
  const [categoria, setCategoria] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleClick = () => {
    if (photo && name) {
      postCategory();
      return;
    }
    setVisible(!visible);
  };

  const handleClickModal = () => {
    handleClick();
    handleModal();
    // refreshPage();
  };

  useEffect(() => {
    herokuApi.get("/categoria").then((res) => setCategoria(res.data));
  }, []);

  const postCategory = () => {
    let postBodyRequest = {
      nome: name,
      foto: photo,
    };
    herokuApi
      .post("/categoria", postBodyRequest)
      .then((res) =>
        res.status == 200
          ? alert("Categoria adicionada com sucesso")
          : alert("Verifique as informações passadas.")
      );
  };

  const deleteCategory = (id) => {
    const delBodyRequest = {
      id: id,
      nome: name,
      foto: photo,
    };
    herokuApi.delete(`/categoria/${id}`, delBodyRequest).then((res) => {
      setCategoria((oldCategory) => oldCategory.filter((item) => item.id)),
        res.status == 200
          ? alert("Categoria deletada com sucesso")
          : alert("Verifique as informações passadas."),
        navigation.navigate("Categorias");
    });
  };

  return (
    <ContainerCatProd>
      <FlatList
        ListHeaderComponent={CategoryHeader}
        data={categoria}
        renderItem={({ item }) => (
          <ListaEstilizada>
            <FotoContainer>
              <SombraFoto>
                <FotoEstilizada source={{ uri: item.foto }} />
              </SombraFoto>
            </FotoContainer>
            <NomeProduto>
              <TextoDinamico
                fColor={`${colors.cinza}`}
                fSize="12px"
                fontFamily="Verdana"
              >
                {item.nome}
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
            <TouchableOpacity onPress={() => deleteCategory(item.id)}>
              <TextoDinamico
                fColor={`${colors.verde}`}
                fSize="12px"
                fontFamily="Verdana"
              >
                Excluir
              </TextoDinamico>
            </TouchableOpacity>
          </ListaEstilizada>
        )}
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
          onChangeText={(write) => {
            setName(write);
          }}
          placeholder="Nome da Categoria"
        />
        <InnerText
          onChangeText={(url) => {
            setPhoto(url);
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

export default ListaCategoria;

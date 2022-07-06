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
import { CategoryHeader } from "../../components/Headers/CategoryHeader";

const MyRenderItem = ({ name, image }) => (
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
        {name}
      </TextoDinamico>
    </NomeProduto>

    <TouchableOpacity>
      <TextoDinamico
        fColor="rgb(60, 98, 85);"
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity>
      <TextoDinamico
        fColor="rgb(60, 98, 85);"
        fSize="12px"
        fontFamily="Verdana"
      >
        Excluir
      </TextoDinamico>
    </TouchableOpacity>
  </ListaEstilizada>
);

const ListaCategoria = () => { 
  const [categoria, setCategoria] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [returnApi, setReturnApi] = useState("");

  const handleClick = () => {
    if (photo && name) {
      postCategory();
      return;
    }
    setVisible(!visible);
  };

  const responseItem = ({ item }) => (
    <MyRenderItem name={item.nome} image={item.foto} />
  );

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

  return (
    <ContainerCatProd>
      <FlatList
        ListHeaderComponent={CategoryHeader}
        data={categoria}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <InnerText
        onChangeText={(e) => {
          setName(e);
        }}
        placeholder="Nome da Categoria"
        style={{ display: visible ? "flex" : "none" }}
      />
      <InnerText
        onChangeText={(e) => {
          setPhoto(e);
        }}
        placeholder="URL da foto"
        style={{ display: visible ? "flex" : "none" }}
      />
      <PrincipalButton
        onUserPress={handleClick}
        height="50px"
        width="120px"
        border="50px"
        mBottom="32px"
        mTop="10px"
        bColor="rgb(60, 98, 85);"
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          Adicionar
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};

export default ListaCategoria;

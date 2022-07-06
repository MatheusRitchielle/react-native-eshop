import React from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  ListaEstilizada,
  FotoEstilizada,
  Container,
  Shadow,
  SeparadorList,
  FotoContainer,
} from "../Produtos/styled";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import herokuApi from "../../service";
import { InnerText } from "../../components/Inputs/styled";

const MyRenderItem = ({ name, image }) => (
  <ListaEstilizada>
    <FotoContainer>
      <Shadow>
        <FotoEstilizada source={{ uri: image }} />
      </Shadow>
    </FotoContainer>
    <TextoDinamico
      fColor={`${colors.secondary}`}
      fSize="12px"
      fontFamily="Verdana"
    >
      {name}
    </TextoDinamico>
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

const ListaCategoria = () => {
  const [categoria, setCategoria] = React.useState([]);
  const [photo, setPhoto] = React.useState("");
  const [name, setName] = React.useState("");
  const [visible, setVisible] = React.useState(false);

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

  React.useEffect(() => {
    herokuApi.get("/categoria").then((response) => setCategoria(response.data));
  }, []);

  const postCategory = () => {
    let postBodyRequest = {
      nome: name,
      foto: photo,
    };
    herokuApi.post("/categoria", postBodyRequest);
  };

  return (
    <Container>
      <FlatList
        data={categoria}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorList}
      />
      <InnerText
        onChangeText={(e) => {
          setName(e);
        }}
        placeholder="teste"
        style={{ display: visible ? "flex" : "none" }}
      />
      <InnerText
        onChangeText={(e) => {
          setPhoto(e);
        }}
        placeholder="teste"
        style={{ display: visible ? "flex" : "none" }}
      />
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
    </Container>
  );
};

export default ListaCategoria;

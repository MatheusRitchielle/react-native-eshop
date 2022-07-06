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
  const responseItem = ({ item }) => (
    <MyRenderItem name={item.nome} image={item.foto} />
  );

  const [categoria, setCategoria] = React.useState([]);

  React.useEffect(() => {
    herokuApi.get("/categoria").then((response) => setCategoria(response.data));
  }, []);

  return (
    <Container>
      <FlatList
        data={categoria}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorList}
      />
      <PrincipalButton
        height="50px"
        width="120px"
        border="50px"
        mBottom="32px"
        bColor={`${colors.secondary}`}
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          <TouchableOpacity>Adicionar</TouchableOpacity>
        </TextoDinamico>
      </PrincipalButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  container: { flex: 1 },
});

export default ListaCategoria;

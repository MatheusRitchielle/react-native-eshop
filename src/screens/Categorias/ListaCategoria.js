import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import herokuApi from "../../service";
import { FotoContainer, FotoEstilizada, ListaEstilizada, SeparadorLista, SombraFoto } from "../../components/FlatList";
import { ContainerCatProd } from "../../components/Containers/styled";
 
const MyRenderItem = ({ name, image }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: image }} />
      </SombraFoto>
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

  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    herokuApi.get("/categoria").then((response) => setCategoria(response.data));
  }, []);

  return (
    <ContainerCatProd>
      <FlatList
        data={categoria}
        renderItem={responseItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <PrincipalButton
        mTop="26px"
        height="50px"
        width="120px"
        border="50px"
        bColor={`${colors.secondary}`}
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          <TouchableOpacity>Adicionar</TouchableOpacity>
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};

export default ListaCategoria;

import React from "react";
import { FlatList, View } from "react-native";
import { ListaEstilizada, FotoEstilizada, Container, Shadow, SeparadorList, FotoContainer } from "./styled";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";

const Lista = [
  {
    id: 1,
    categoria: "categoria a",
    foto: "https://images.tcdn.com.br/img/img_prod/779675/testeira_nike_swoosh_227_variacao_223_1_20211013113835.jpg",
  },
  {
    id: 2,
    categoria: "categoria b",
    foto: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg",
  },
  {
    id: 3,
    categoria: "categoria c",
    foto: "https://youridstore.com.br/media/catalog/product/cache/1/image/750x/472321edac810f9b2465a359d8cdc0b5/c/t/ct2255-325.jpg",
  },
  {
    id: 4,
    categoria: "categoria d",
    foto: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-se-masculino-DN4155-001-1-11645629632.jpg",
  },
  {
    id: 5,
    categoria: "categoria e",
    foto: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg",
  },
];

const Item = ({ categoria, foto }) => (
  <ListaEstilizada>
    <FotoContainer>
      <Shadow>
        <FotoEstilizada source={{ uri: foto }} />
      </Shadow>
    </FotoContainer>
    <TextoDinamico fColor={`${colors.secondary}`} fSize="12px" fontFamily="Verdana" >{categoria}</TextoDinamico>
    <TouchableOpacity>
    <TextoDinamico fColor={`${colors.primary}`} fSize="12px" fontFamily="Verdana" >Editar</TextoDinamico>
      </TouchableOpacity>
      <TouchableOpacity>
      <TextoDinamico fColor={`${colors.primary}`} fSize="12px" fontFamily="Verdana" >Excluir</TextoDinamico>
    </TouchableOpacity>
  </ListaEstilizada>
);

const Categoria = () => {
  const itemRenderizado = ({ item }) => (
    <Item
      foto={item.foto}
      categoria={item.categoria}
    />
  );

  return (
    <Container>
      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorList}
      />
    </Container>
  );
};

export default Categoria;
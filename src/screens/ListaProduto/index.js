import React from "react";
import { CustomContainerLista } from "../../components/CustomContainer/styles";
import { FlatList, Image, View, Text, Touchable } from "react-native";
import { ListText, MainTitle, PdColumn, AddButton, ListaEstilizada, FotoEstilizada, Container, FotoContainer } from "../ListaProduto/styles";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

const Lista = [
  {
    id: 1,
    produto: "produto a",
    estoque: "7 un",
    preco: "R$ 50",
    foto: "https://images.tcdn.com.br/img/img_prod/779675/testeira_nike_swoosh_227_variacao_223_1_20211013113835.jpg"
  },
  {
    id: 2,
    produto: "produto b",
    estoque: "9 un",
    preco: "R$ 30",
    foto: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg"
  },
  {
    id: 3,
    produto: "produto c",
    estoque: "3 un",
    preco: "R$ 120",
    foto: "https://youridstore.com.br/media/catalog/product/cache/1/image/750x/472321edac810f9b2465a359d8cdc0b5/c/t/ct2255-325.jpg"
  },
  {
    id: 4,
    produto: "produto d",
    estoque: "8 un",
    preco: "R$ 20",
    foto: "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-se-masculino-DN4155-001-1-11645629632.jpg"
  },
  {
    id: 5,
    produto: "produto e",
    estoque: "5 un",
    preco: "R$ 75",
    foto: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg"
  },
];

const Item = ({ produto, estoque, preco, foto }) => (
  <ListaEstilizada>
    <View style={{ flexDirection: 'row' }}>
    <FotoEstilizada>
    <Image
    source={{ uri: foto }}
    />
    </FotoEstilizada>
    </View>
    <View style={{marginLeft: 8}}>
    <Text>{produto}</Text>
    <Text>{estoque}</Text>
    <Text>{preco}</Text>
    </View>

  <TouchableOpacity>
    <Text>Excluir</Text>
  </TouchableOpacity>
  </ListaEstilizada>
);

const ListaProduto = () => {
  const itemRenderizado = ({ item }) => (
    <Item imageUrl={item.imageUrl} produto={item.produto} estoque={item.estoque} preco={item.preco} />
  );

  return (
    <Container>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
      </Container>
  );
};

export default ListaProduto;
import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import { Container, FotoEstilizada, ListaEstilizada } from "../../components/FlatList/index";

const Lista = [
  {
    id: 1,
    produto: "produto a",
    estoque: "7 un",
    preco: "R$ 50",
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg'
  },
  {
    id: 2,
    produto: "produto b",
    estoque: "9 un",
    preco: "R$ 30",
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg'
  },
  {
    id: 3,
    produto: "produto c",
    estoque: "3 un",
    preco: "R$ 120",
    foto: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg'
  },
];

const Item = ({ produto, estoque, preco, foto }) => (
  <ListaEstilizada>
  <FotoEstilizada>
  <Image
    source={{ uri: {foto} }}
    />
  </FotoEstilizada>
  <Text>{produto}</Text>
  <Text>{estoque}</Text>
  <Text>{preco}</Text>
</ListaEstilizada>
);

 const ListaProduto = () => {
  const itemRenderizado = ({ item }) => (
    <Item foto={item.foto} produto={item.produto} estoque={item.estoque} preco={item.preco} />
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
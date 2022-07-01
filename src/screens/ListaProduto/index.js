import React from "react";
import { CustomContainerLista } from "../../components/CustomContainer/styles";
import { FlatList, Text, View } from "react-native";
import { ListText, MainTitle, PdColumn, AddButton } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Lista = [
  {
    id: 1,
    produto: "produto a",
    estoque: "7 un",
    preco: "R$ 50",
  },
  {
    id: 2,
    produto: "produto b",
    estoque: "9 un",
    preco: "R$ 30",
  },
  {
    id: 3,
    produto: "produto c",
    estoque: "3 un",
    preco: "R$ 120",
  },
  {
    id: 4,
    produto: "produto d",
    estoque: "8 un",
    preco: "R$ 20",
  },
  {
    id: 5,
    produto: "produto e",
    estoque: "5 un",
    preco: "R$ 75",
  },
];

const Item = ({ produto, estoque, preco }) => (
  <PdColumn>
    <ListText>{produto}</ListText>
    <ListText>{estoque}</ListText>
    <ListText>{preco}</ListText>
    <Feather name="edit-2" size={18} color="black" />
    <Ionicons name="trash-outline" size={18} color="black" />
  </PdColumn>
);

const ListaProduto = () => {
  const itemRenderizado = ({ item }) => (
    <Item produto={item.produto} estoque={item.estoque} preco={item.preco} />
  );

  return (
    <CustomContainerLista>
      <MainTitle>Lista Produtos</MainTitle>
      <PdColumn>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
      </PdColumn>
      <AddButton>Adicionar</AddButton>
    </CustomContainerLista>
  );
};

export default ListaProduto;

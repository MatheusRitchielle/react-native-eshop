import React from "react";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { FlatList, Text, View } from "react-native";
import { Table, MainTitle, PdColumn, QtColumn, PrColumn } from "./styles";

const Lista = [
    {
      id:1,
      produto: "produto a",
      estoque: "7 un",
      preco: "R$ 50",
    },
    {
      id:1,
      produto: "produto b",
      estoque: "10 un",
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
    }
  ];
  
  const Item = ({produto,estoque, preco}) => (
      <PdColumn>
      <Text>{produto}</Text>
      <Text>{estoque}</Text>
      <Text>{preco}</Text>
      </PdColumn>
  );
  
  const ListaProduto = () => {
    const itemRenderizado = ({item}) => (
      <Item  produto={item.produto}
      estoque={item.estoque}
      preco={item.preco} />
    );
  
    return (

          <CustomContainer>
            <MainTitle>
              <Text>Lista Produtos</Text>
            </MainTitle>
            <PdColumn>
      <FlatList 
      data={Lista}
      renderItem={itemRenderizado}
      keyExtractor={(item) => item.id} />
      </PdColumn>
        </CustomContainer>
    )
  };

  export default ListaProduto;
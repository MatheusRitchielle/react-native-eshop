import React from "react";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { AntDesign } from '@expo/vector-icons';
import { FlatList, View, Text } from "react-native";

const Lista = [
  {
    id: 1,
    produto: "produto 1",
    preco: "Preço R$ 50",
    estoque: "1 Unidades em estoque",
  },
  {
    id: 2,
    produto: "produto 5",
    preco: "Preço R$40",
    estoque: "20 Unidades em estoque",
  },
  {
    id: 3,
    produto: "produto 6",
    preco: "Preço R$ 70",
    estoque: "8 Unidades em estoque",
  }
];

const Item = ({ produto, preco, estoque }) => (
 
    <View>
      <Text>{produto}</Text>
      <Text>{preco}<Text>
      </Text>{estoque}</Text>
    </View>
);

const Produtos = () => {
  const itemRenderizado = ({ item }) => (
    <Item produto={item.produto}
      preco={item.preco}
      estoque={item.estoque} />
  );

  
  return (
    <CustomContainer>
      <View style={{ marginTop: 20 }} />
      <AntDesign name="CodeSandbox" size={24} color="black" />
      <CustomTitle>Pagina Produtos</CustomTitle>

      <FlatList
        data={Lista}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id} />
    </CustomContainer>
  );
};

export default Produtos;
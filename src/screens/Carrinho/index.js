import React from "react";
import { FlatList, View, Text } from "react-native";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { CardGeneric } from '../../components/CardGeneric/styles'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { ButtonContainer } from './../../components/CustomButton/styles';
import { ContainerCarrinho, ButtonCarrinho, CustomTextCarrinho } from "./styles";

const Lista = [
  {
    id: 1,
    produto: "Gillette (lâmina de barbear)",
    preco: 50,
    estoque: 20,
  },
  {
    id: 2,
    produto: "Miojo (macarrão instantâneo)",
    preco: 40,
    estoque: 20,
  },
  {
    id: 3,
    produto: "Danone (iogurte)",
    preco: 70,
    estoque: 8,
  },
  {
    id: 4,
    produto: "Bombril (esponja de aço)",
    preco: 50,
    estoque: 1,
  },
  {
    id: 5,
    produto: "Zíper (fecho éclair) - Sim, Zíper é uma marca da YKK, e aposto que você falou esse nome a vida inteira e não sabia! :)",
    preco: 40,
    estoque: 20,
  },
  {
    id: 6,
    produto: "Sucrilhos (cereal matinal)",
    preco: 70,
    estoque: 8,
  },
  {
    id: 7,
    produto: "Durex (fita adesiva)",
    preco: 50,
    estoque: 1,
  },
  {
    id: 8,
    produto: "Band-aid (curativo)",
    preco: 40,
    estoque: 20,
  },
  {
    id: 9,
    produto: "Jet-ski (moto aquática)",
    preco: 5,
    estoque: 8,
  },
  {
    id: 10,
    produto: "Leite Ninho (leite em pó) ",
    preco: 10,
    estoque: 1,
  },
  {
    id: 11,
    produto: "Mu-mu (doce de leite)",
    preco: 15,
    estoque: 20,
  },
  {
    id: 12,
    produto: "Chiclete (goma de mascar) - Essa é uma versão aportuguesada da palavra Chiclets, marca da Adams.",
    preco: 20,
    estoque: 8,
  }
];



const Adicionar = () => {
  return (setNumero(numero + 1))
}

const Remover = () => {
  return (
    setNumero(numero - 1)
  )
}

const Item = ({ produto, preco, estoque }) => (
  <CardGeneric>
    <Text>Nome do produto: {produto}</Text>
    <Text>R$ {preco}</Text>
    <ButtonContainer onClick={() => Adicionar} >
      <MaterialIcons name="add-box" size={24} color="black" />
    </ButtonContainer>
    <Text>Quantidade {estoque}</Text>
    <ButtonContainer onClick={() => Remover} >
      <Octicons name="diff-removed" size={24} color="black" />
    </ButtonContainer>
    <Text>Valor total R$: {estoque * preco} </Text>
  </CardGeneric>
);

const Carrinho = () => {
  const itemRenderizado = ({ item }) => (
    <Item
      produto={item.produto}
      preco={item.preco}
      estoque={item.estoque}
    />
  );
  
  return (
    <>
      <CustomContainer>
        <View style={{ marginTop: 20 }} />
        <CustomTitle style={{ color: '#61882E' }}>Carrinho</CustomTitle>

        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id} />

        <Text>Valor</Text>
      </CustomContainer>

      <ContainerCarrinho>

        <ButtonCarrinho >
          <CustomTextCarrinho>Adicionar Itens</CustomTextCarrinho>
        </ButtonCarrinho>

        <ButtonCarrinho >
          <CustomTextCarrinho>Fechar Pedido</CustomTextCarrinho>
        </ButtonCarrinho>

      </ContainerCarrinho>

    </>
  );
};

export default Carrinho;
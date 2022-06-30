import React from "react";
import { FlatList, Text } from "react-native";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { ContainerCarrinho, ButtonCarrinho, CustomTextCarrinho, ContainerCabecalho, CardGeneric, ColumnProduct, ColumnPrUn, ColumnQtd, ColumnTotal } from "./styles";
import { AntDesign, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

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
    <ColumnProduct>
      <Text style={{ textAlign: 'center' }}>{produto}</Text>
    </ColumnProduct>

    <ColumnPrUn>
      <Text >{preco}</Text>
    </ColumnPrUn>

    {/* <ButtonContainer onClick={() => Adicionar} >
      <MaterialIcons name="add-box" size={24} color="black" />
    </ButtonContainer>  */}
    <ColumnQtd>
      <Text style={{ fontStyle: 'italic' }}>{estoque}</Text>
    </ColumnQtd>

    {/* <ButtonContainer onClick={() => Remover} >
      <Octicons name="diff-removed" size={24} color="black" />
    </ButtonContainer> */}
    <ColumnTotal>
      <Text>R$: {estoque * preco} </Text>
    </ColumnTotal>
  </CardGeneric>
);

const Carrinho = ({ navigation }) => {
  const itemRenderizado = ({ item }) => (
    <Item
      produto={item.produto}
      preco={item.preco}
      estoque={item.estoque}
    />
  );

  return (
    <>
      <CustomTitle style={{ color: '#61882E', textAlign: 'center' }}>
        Carrinho
      </CustomTitle>
      <ContainerCabecalho>
        <ColumnProduct>
          <Text style={{ fontWeight: 'bold' }}>Produto</Text>
        </ColumnProduct>
        <ColumnQtd>
          <Text style={{ fontWeight: 'bold', textAlign: 'left', paddingRight: '20px' }}>Quantidade</Text>
        </ColumnQtd>
        <ColumnPrUn>
          <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Preço Unit</Text>
        </ColumnPrUn>
        <ColumnTotal>
          <Text style={{ fontWeight: 'bold' }}>Total</Text>
        </ColumnTotal>
      </ContainerCabecalho>
      <CustomContainer>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id} />
      </CustomContainer>
      <Text style={{ fontWeight: 'bold', textAlign: 'center' }} >Valor Total: R$</Text>
      <Text style={{ textAlign: 'center' }}>Formas de pagamento</Text>
      <ContainerCarrinho>
        <AntDesign name="qrcode" size={24} color="black" />
        <Entypo name="paypal" size={24} color="black" />
        <FontAwesome5 name="bitcoin" size={24} color="black" />
        <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
        <Entypo name="credit-card" size={24} color="black" />
      </ContainerCarrinho>
      <ContainerCarrinho>
        <ButtonCarrinho onPress={() => navigation.goBack()} >
          <CustomTextCarrinho>
            Adicionar Itens
          </CustomTextCarrinho>
        </ButtonCarrinho>
        <ButtonCarrinho onPress={() => navigation.navigate("Pagina de Produtos")} >
          <CustomTextCarrinho>
            Fechar Pedido
          </CustomTextCarrinho>
        </ButtonCarrinho>
      </ContainerCarrinho>

    </>
  );
};

export default Carrinho;
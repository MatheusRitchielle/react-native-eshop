import React from "react";
import { FlatList, Text } from "react-native";
import { CustomContainer } from "../../components/Containers/styled";
import { CustomTitle } from "../../components/Texts/styled";
import {
  ContainerCarrinho,
  ButtonCarrinho,
  CustomTextCarrinho,
  ContainerCabecalho,
  CardGeneric,
  ColumnProduct,
  ColumnPrUn,
  ColumnQtd,
  ColumnTotal,
  CustomText,
} from "./styled";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

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
    produto:
      "Zíper (fecho éclair) - Sim, Zíper é uma marca da YKK, e aposto que você falou esse nome a vida inteira e não sabia! :)",
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
    produto:
      "Chiclete (goma de mascar) - Essa é uma versão aportuguesada da palavra Chiclets, marca da Adams.",
    preco: 20,
    estoque: 8,
  },
];

const Adicionar = () => {
  return setNumero(numero + 1);
};

const Remover = () => {
  return setNumero(numero - 1);
};
const TextoDinamico = ({
  children,
  tAlgin,
  fFamily,
  fSize,
  fWeight,
  pRight,
}) => (
  <CustomText
    text={tAlgin}
    font={fFamily}
    git
    size={fSize}
    weight={fWeight}
    pdRight={pRight}
  >
    {children}
  </CustomText>
);

const Item = ({ produto, preco, estoque }) => (
  <CardGeneric>
    <ColumnProduct>
      <TextoDinamico>{produto}</TextoDinamico>
    </ColumnProduct>
    <ColumnPrUn>
      <Text>{preco}</Text>
    </ColumnPrUn>
    {/* <ButtonContainer onClick={() => Adicionar} >
      <MaterialIcons name="add-box" size={24} color="black" />
    </ButtonContainer>  */}
    <ColumnQtd>
      <TextoDinamico>{estoque}</TextoDinamico>
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
    <Item produto={item.produto} preco={item.preco} estoque={item.estoque} />
  );

  return (
    <>
      <CustomTitle style={{ color: "#61882E", textAlign: "center" }}>
        Carrinho
      </CustomTitle>
      <ContainerCabecalho>
        <ColumnProduct>
          <TextoDinamico fWeight="bold">Produto</TextoDinamico>
        </ColumnProduct>
        <ColumnQtd>
          <TextoDinamico pRight="20px">Quantidade</TextoDinamico>
        </ColumnQtd>
        <ColumnPrUn>
          <TextoDinamico fWeight="bold">Preço Unit</TextoDinamico>
        </ColumnPrUn>
        <ColumnTotal>
          <TextoDinamico>Total</TextoDinamico>
        </ColumnTotal>
      </ContainerCabecalho>
      <CustomContainer>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
      </CustomContainer>
      <TextoDinamico>Valor Total: R$</TextoDinamico>
      <TextoDinamico>Formas de pagamento</TextoDinamico>
      <ContainerCarrinho>
        <AntDesign name="qrcode" size={24} color="black" />
        <Entypo name="paypal" size={24} color="black" />
        <FontAwesome5 name="bitcoin" size={24} color="black" />
        <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
        <Entypo name="credit-card" size={24} color="black" />
      </ContainerCarrinho>
      <ContainerCarrinho>
        <ButtonCarrinho onPress={() => navigation.goBack()}>
          <CustomTextCarrinho>Adicionar Itens</CustomTextCarrinho>
        </ButtonCarrinho>
        <ButtonCarrinho
          onPress={() => navigation.navigate("Pagina de Produtos")}
        >
          <CustomTextCarrinho>Fechar Pedido</CustomTextCarrinho>
        </ButtonCarrinho>
      </ContainerCarrinho>
    </>
  );
};

export default Carrinho;

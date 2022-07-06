import React from "react";
import TextoDinamico from "../../components/Texts";
import {
  ImagePagination,
  PaginationContainer,
  ButtonsContainer,
  AlignItemsContainer,
  FavoriteIcon,
  AlignPriceContainer,
} from "./styled";
import { ScrollView, FlatList } from "react-native";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import { ProductHeader } from "../../components/Headers/ProductHeader";
import { SeparatorItem } from "../../components/SeparatorItem/index";

const Product = [
  {
    id: 1,
    produto: "Nike AF 1/1",
    descricao:
      "O brilho perdura no Nike AF 1/1, o clássico do basquete que dá um toque personalizado naquilo que você conhece bem: couro macio, cores vibrantes e o brilho perfeito para fazer você se destacar. O design personalizável apresenta detalhes em velcro com sobreposições removíveis para que você possa variar seu look de acordo com o dia.",
    preco: "R$ 590,99",
    imageUrl:
      "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-af-11-masculino-DB2576-001-1-11627399691.jpg",
  },
  {
    id: 2,
    produto: "Adidas Super Star ",
    descricao:
      "O esplendor continua reinando no original do basquete. Combinando conforto em quadra com brilho fora dela, o tênis atualiza aspectos já conhecidos: construção dos anos 80 e detalhes arrojados. Dos excelentes materiais ao design do cupsole, o tênis proporciona estilo durável, mais polido que o vidro da tabela.",
    preco: "R$ 780,99",
    imageUrl:
      "https://static.netshoes.com.br/produtos/tenis-couro-adidas-superstar-foundation-masculino/14/D13-0488-114/D13-0488-114_zoom1.jpg?ts=1616594021",
  },
  {
    id: 3,
    produto: "Nike Air Max 90 SE",
    descricao:
      "O Max Air mudou o jogo em 1987. Prestamos agora homenagem ao seu aniversário de esmeralda (35 anos!) com o Nike Air Max 90 SE. Os desenhos e as cores de esmeralda destacam este momento especial, enquanto a clássica sola waffle e o amortecimento Air exposto mantém o seu legado com conforto.",
    preco: "R$ 850,99",
    imageUrl:
      "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-se-masculino-DN4155-001-1-11645629632.jpg",
  },
  {
    id: 4,
    produto: "Nike ACG GORE-TEX ",
    descricao:
      "Criada e testada no Oregon, a Jaqueta Nike ACG Gore-tex tem duas camadas de materiais resistentes ao vento e à prova d'água são combinados com um capuz de três peças para proteção. Um capuz de três peças com cordão oferece proteção e ajuste personalizado. Feche o zíper da proteção contra chuva para cobertura adicional em condições úmidas.",
    preco: "R$ 999,99",
    imageUrl:
      "https://youridstore.com.br/media/catalog/product/cache/1/image/750x/472321edac810f9b2465a359d8cdc0b5/c/t/ct2255-325.jpg",
  },
  {
    id: 5,
    produto: "Testeira Nike Swoosh",
    descricao:
      "Testeiras podem ser muito úteis para diversas modalidades esportivas, sendo muito utilizadas não apenas por estilo, mas para ajudar com o suor. Em esportes de alto impacto ou de alta intensidade, é normal a transpiração ser maior e a Testeira Nike Swoosh é perfeita para te auxiliar nesses momentos.",
    preco: "R$ 75",
    imageUrl:
      "https://images.tcdn.com.br/img/img_prod/779675/testeira_nike_swoosh_227_variacao_223_1_20211013113835.jpg",
  },
];

const ProductItem = ({ produto, descricao, preco, imageUrl }) => (
  <PaginationContainer>
    <AlignItemsContainer>
      <TextoDinamico fontWeight="bold" fSize="22px" mTop="8px">
        {produto}
      </TextoDinamico>

      <ImagePagination source={{ uri: imageUrl }} />
    </AlignItemsContainer>
    <AlignItemsContainer>
      <FavoriteIcon
        source={{
          uri: "https://cdn-icons.flaticon.com/png/512/4208/premium/4208420.png?token=exp=1656976382~hmac=06663dd7e88a6bb188ebf1096c68227b",
        }}
      />
      <TextoDinamico mTop="48px">{descricao}</TextoDinamico>
      <AlignPriceContainer>
        <TextoDinamico fontWeight="bold" fSize="20px" alignSelf="flex-start">
          Preço:{" "}
        </TextoDinamico>
        <TextoDinamico mTop="3.5px" fSize="17px">
          {preco}
        </TextoDinamico>
      </AlignPriceContainer>
      <ButtonsContainer>
        <PrincipalButton
          height="30px"
          width="70px"
          border="5px"
          mRight="33.6px"
          mBottom="32px"
          bColor={`${colors.fourth}`}
        >
          <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
            Adicionar Carrinho
          </TextoDinamico>
        </PrincipalButton>
        <PrincipalButton height="30px" width="70px" border="5px" mBottom="32px">
          <TextoDinamico fColor={`${colors.tertiary}`} fSize="13px">
            COMPRAR
          </TextoDinamico>
        </PrincipalButton>
      </ButtonsContainer>
    </AlignItemsContainer>
  </PaginationContainer>
);

const Principal = ({ navigation }) => {
  const productRender = ({ item }) => (
    <ProductItem
      imageUrl={item.imageUrl}
      produto={item.produto}
      descricao={item.descricao}
      preco={item.preco}
    />
  );

  return (
    <ScrollView>
      <FlatList
        data={Product}
        renderItem={productRender}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ProductHeader}
        ItemSeparatorComponent={SeparatorItem}
      />
    </ScrollView>
  );
};

export default Principal;

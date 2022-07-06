import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import TextoDinamico from "../../components/Texts";
import colors from "../../theme/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import {
  FotoContainer,
  FotoEstilizada,
  ListaEstilizada,
  NomeProduto,
  SeparadorLista,
  SombraFoto,
} from "../../components/FlatList/styled";
import { ContainerCatProd } from "../../components/Containers/styled";
import herokuApi from "../../service";

const Item = ({ nome, qtdEstoque, preco, foto }) => (
  <ListaEstilizada>
    <FotoContainer>
      <SombraFoto>
        <FotoEstilizada source={{ uri: foto }} />
      </SombraFoto>
    </FotoContainer>
    <View>
      <NomeProduto>
        <TextoDinamico
          fColor={`${colors.secondary}`}
          fSize="12px"
          fontFamily="Verdana"
        >
          {nome}
        </TextoDinamico>
      </NomeProduto>
      <TextoDinamico
        fColor={`${colors.secondary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        {qtdEstoque} unidades
      </TextoDinamico>
      <TextoDinamico
        fColor={`${colors.secondary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        R${preco}
      </TextoDinamico>
    </View>

    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.primary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Editar
      </TextoDinamico>
    </TouchableOpacity>
    <TouchableOpacity>
      <TextoDinamico
        fColor={`${colors.primary}`}
        fSize="12px"
        fontFamily="Verdana"
      >
        Excluir
      </TextoDinamico>
    </TouchableOpacity>
  </ListaEstilizada>
);

const ListaProduto = () => {
  const itemRenderizado = ({ item }) => (
    <Item
      foto={item.foto}
      nome={item.nome}
      qtdEstoque={item.qtdEstoque}
      preco={item.preco}
    />
  );

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    herokuApi.get("/produto").then((response) => setProduto(response.data));
  }, []);

  return (
    <ContainerCatProd>
      <FlatList
        data={produto}
        renderItem={itemRenderizado}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={SeparadorLista}
      />
      <PrincipalButton
        mTop="26px"
        height="50px"
        width="120px"
        border="50px"
        bColor={`${colors.secondary}`}
      >
        <TextoDinamico fColor={`${colors.tertiary}`} fSize="16px">
          <TouchableOpacity>Adicionar</TouchableOpacity>
        </TextoDinamico>
      </PrincipalButton>
    </ContainerCatProd>
  );
};

export default ListaProduto;

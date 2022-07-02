import React from "react";
import { FlatList } from "react-native";
import {
  CardGeneric,
  NomeUsuario,
  CustomText,
} from "./styles";
import { Feather, AntDesign } from '@expo/vector-icons';
import ButtonIcon from '../../components/CustomButton/ButtonIcon';
import { LogoHorizontal } from './../../components/CustomImageLogo/styles';
import logoGrande from "../../../assets/images/logo-grande.png";
import ContainerDinamico from './../../components/CustomContainer/index';
import PrincipalButton from './../../components/CustomButton/PrimaryButton';

const Lista = [
  {
    id: 1,
    nome: "Vitória Emilly Duarte Vitória Emilly Duarte Vitória Emilly Duarte Vitória Emilly DuarteVitória Emilly Duarte Vitória Emilly DuarteVitória Emilly Duarte",
    cpf: "017.103.546-15",
    data_nasc: "22/04/1980",
    login: "Vitória",
    status: "ativo",
    senha: "YrGwSr1cd8",
  },
  {
    id: 2,
    nome: "Henrique Francisco Renan Mendes",
    cpf: "435.380.238-08",
    data_nasc: "16/06/1981",
    login: "Henrique",
    status: "ativo",
    senha: "UZKBdBe1iy",
  },
  {
    id: 3,
    nome: "Antonio Henrique Caldeira",
    cpf: "493.978.754-00",
    data_nasc: "01/07/2002",
    login: "Antonio",
    status: "ativo",
    senha: "Nz4qPNKKhI",
  },
  {
    id: 4,
    nome: "Pedro Carlos Eduardo Nascimento",
    cpf: "090.610.004-67",
    data_nasc: "01/07/1997",
    login: "Pedro",
    status: "ativo",
    senha: "mD5e1xjz0M",
  },
  {
    id: 5,
    nome: "Ana Melissa Patrícia dos Santos",
    cpf: "435.227.200-08",
    data_nasc: "24/06/1964",
    login: "Ana",
    status: "ativo",
    senha: "NiezIeQfEi",
  },
];

const TextoDinamico = ({
  children,
  tAlgin,
  fFamily,
  fSize,
  fWeight,
  pRight,
  color,
}) => (
  <CustomText
    text={tAlgin}
    font={fFamily}
    size={fSize}
    weight={fWeight}
    pdRight={pRight}
    color={color}
  >
    {children}
  </CustomText>
);

const Item = ({ nome }) => (
  <CardGeneric>
    <NomeUsuario>
      <TextoDinamico tAlgin="left" >{nome}</TextoDinamico>
    </NomeUsuario>
    <ButtonIcon>
      <AntDesign name="edit" size={24} color="#A6771B" />
    </ButtonIcon>
    <ButtonIcon>
      <Feather name="trash" size={24} color="#A6771B" />
    </ButtonIcon>
  </CardGeneric>
);

const Usuarios = ({ navigation }) => {
  const itemRenderizado = ({ item }) => (
    <Item nome={item.nome} preco={item.preco} estoque={item.estoque} />
  );

  return (
    <>
      {/* <ContainerCabecalho>
        <NomeUsuario>
          <TextoDinamico fWeight="bold">Nome do Usuário</TextoDinamico>
        </NomeUsuario>
        <EditDelete>
          <TextoDinamico fWeight="bold">Editar</TextoDinamico>
        </EditDelete>
        <EditDelete >
          <TextoDinamico fWeight="bold">Apagar</TextoDinamico>
        </EditDelete>
      </ContainerCabecalho> */}

      <ContainerDinamico>
        <LogoHorizontal source={logoGrande} />
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
        <PrincipalButton
          mTop="1rem"
          mBottom="1rem"
          bColor={"#333333"}
          onUserPress={() => navigation.navigate("Rotas")}
        >
          <TextoDinamico
            color={"#fff"}
          >Adicionar</TextoDinamico>
        </PrincipalButton>
      </ContainerDinamico>

    </>
  );
};

export default Usuarios;

import React, { useState } from "react";
import { FlatList, Button, View, Modal } from "react-native";
import { CardGeneric, NomeUsuario, CustomText } from "./styled";
import { Feather, AntDesign } from "@expo/vector-icons";
import { LogoHorizontal } from "../../components/Images/styled";
import logoGrande from "../../../assets/images/logo-grande.png";
import ContainerDinamico from "../../components/Containers/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { Overlay } from "react-native-elements";

const Lista = [
  {
    id: 1,
    nome: "Vitória Emilly Duarte",
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
      <TextoDinamico tAlgin="left">{nome}</TextoDinamico>
    </NomeUsuario>
  </CardGeneric>
);

const Usuarios = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const itemRenderizado = ({ item }) => (
    <CardGeneric>
      <Item nome={item.nome} />
      <ButtonIcon onUserPress={handleModal}>
        <AntDesign name="edit" size={24} color="#A6771B" />
      </ButtonIcon>
      <ButtonIcon>
        <Feather name="trash" size={24} color="#A6771B" />
      </ButtonIcon>
      <View>
        <Modal
          isVisible={isModalVisible}
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
        >
          <Overlay>
            <TextoDinamico>
              Nome: <Item nome={item.nome} />
            </TextoDinamico>
            <TextoDinamico>
              CPF: <Item nome={item.cpf} />
            </TextoDinamico>
            <TextoDinamico>
              Data de Nascimento: <Item nome={item.data_nasc} />
            </TextoDinamico>
            <TextoDinamico>
              Usuário: <Item nome={item.login} />
            </TextoDinamico>
            <TextoDinamico>
              Status: <Item nome={item.status} />
            </TextoDinamico>
            <TextoDinamico>
              Senha: <Item nome={item.senha} />
            </TextoDinamico>
            <Button title="Hide modal" onPress={handleModal} />
          </Overlay>
        </Modal>
      </View>
    </CardGeneric>
  );

  return (
    <>
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
          onUserPress={() => navigation.navigate("EditarUsuario")}
        >
          <TextoDinamico color={"#fff"}>Adicionar</TextoDinamico>
        </PrincipalButton>
      </ContainerDinamico>
    </>
  );
};

export default Usuarios;

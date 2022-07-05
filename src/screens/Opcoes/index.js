import React from "react";
import { CustomContainer } from "../../components/Containers/styled";
import { SecondaryButton } from "../../components/Buttons/styled";
import { CustomText } from "../../components/Texts/styled";
import {
  FontAwesome5,
  FontAwesome,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { CardOpcoes } from "../../components/Cards/styled";

const Opcoes = ({ navigation }) => {
  return (
    <CustomContainer>
      <CardOpcoes>
        <SecondaryButton
          onPress={() => navigation.navigate("Pagina de Produtos")}
        >
          <CustomText style={{ color: "black" }}>
            <FontAwesome name="user-o" size={24} color="black" /> Perfil
          </CustomText>
        </SecondaryButton>
      </CardOpcoes>

      <CardOpcoes>
        <SecondaryButton
          onPress={() => navigation.navigate("Pagina de Produtos")}
        >
          <CustomText>
            <FontAwesome name="rocket" size={24} color="black" /> Produtos
          </CustomText>
        </SecondaryButton>
      </CardOpcoes>

      <CardOpcoes>
        <SecondaryButton
          onPress={() => navigation.navigate("Pagina de Categirias")}
        >
          <CustomText>
            <FontAwesome5 name="boxes" size={24} color="black" /> Categorias
          </CustomText>
        </SecondaryButton>
      </CardOpcoes>

      <CardOpcoes>
        <SecondaryButton onPress={() => navigation.navigate("Usuarios")}>
          <CustomText>
            <FontAwesome5 name="users" size={24} color="black" /> Usuários
          </CustomText>
        </SecondaryButton>
      </CardOpcoes>

      <CardOpcoes>
        <SecondaryButton
          onPress={() => navigation.navigate("Pagina de Categirias")}
        >
          <CustomText>
            <EvilIcons name="gear" size={24} color="black" /> Conta
          </CustomText>
        </SecondaryButton>
      </CardOpcoes>

      <CardOpcoes>
        <SecondaryButton onPress={() => navigation.navigate("Login")}>
          <MaterialCommunityIcons
            name="location-exit"
            size={24}
            color="black"
          />
          <CustomText>Sair</CustomText>
        </SecondaryButton>
      </CardOpcoes>
    </CustomContainer>
  );
};

export default Opcoes;

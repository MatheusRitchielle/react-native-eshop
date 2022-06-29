import React from "react";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { SecondaryButton } from "../../components/CustomButton/styles";
import { CustomText } from "../../components/CustomText/styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Opcoes = ({ navigation }) => {
  return (
    <CustomContainer>
      <SecondaryButton
        onPress={() => navigation.navigate("Pagina de Produtos")}
      >
        <AntDesign name="CodeSandbox" size={24} color="black" />
        <CustomText style={{ color: "black" }}>Produtos</CustomText>
      </SecondaryButton>

      <SecondaryButton
        onPress={() => navigation.navigate("Pagina de Categirias")}
      >
        <FontAwesome5 name="boxes" size={24} color="black" />
        <CustomText style={{ color: "black" }}>Categorias</CustomText>
      </SecondaryButton>
    </CustomContainer>
  );
};

export default Opcoes;

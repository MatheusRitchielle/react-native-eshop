import { CustomContainerCS } from "./../../components/CustomContainer/styles";
import styled from "styled-components/native";
import iconeGrande from "../../../assets/images/iconeGrande.png";
import { Button } from "react-native-paper";
import { CustomTextCS } from "../../components/CustomText/styles";

const CadastroSucesso = () => {
  return (
    <CustomContainerCS>
      <Logo source={iconeGrande} />
      <CustomH1>Usuário cadastrado com sucesso!</CustomH1>
      <Button
        style={{}}
        onPress={() => navigation.navigate("Menu Principal")}
      >
        <CustomTextCS>LOGIN</CustomTextCS>
      </Button>
    </CustomContainerCS>
  );
};

export default CadastroSucesso;

export const Logo = styled.Image`
  width: 120px;
  height: 130px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;

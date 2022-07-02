import { CustomContainerCS } from "./../../components/CustomContainer/styles";
import styled from "styled-components/native";
import PrincipalButton from './../../components/CustomButton/PrimaryButton';
import { LogoHorizontal } from './../../components/CustomImageLogo/styles';
import logoGrande from "../../../assets/images/logo-grande.png";
import TextoDinamico from './../../components/CustomText/index';
import { CustomH1 } from "../../components/CustomTitle/styles";

const CadastroSucesso = () => {
  return (
    <CustomContainerCS>
     <LogoHorizontal source={logoGrande} />
      <CustomH1>Usuário cadastrado com sucesso!</CustomH1>
      <PrincipalButton
        mTop="5rem"
        onUserPress={() => navigation.navigate("Login")}
      >
        <TextoDinamico>Login</TextoDinamico>
      </PrincipalButton>
    </CustomContainerCS>
  );
};

export default CadastroSucesso;

export const Logo = styled.Image`
  width: 120px;
  height: 130px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;

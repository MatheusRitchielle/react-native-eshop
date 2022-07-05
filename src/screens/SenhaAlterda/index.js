import { CustomTitle } from "../../components/Texts/styled";
import ContainerDinamico from "../../components/Containers/index";
import { LogoRecover } from "../../components/Images/styled";
import recoverImage from "../../../assets/images/recover.png";
import { CustomText } from "../../components/Texts/styled";
import PrincipalButton from "../../components/Buttons/PrimaryButton";

const SenhaAlterada = () => {
  return (
    <ContainerDinamico tAlign="center">
      <LogoRecover source={recoverImage} />

      <CustomTitle>Senha alterada com sucesso!</CustomTitle>
      <PrincipalButton mTop="5rem" onPress={() => navigation.navigate("Login")}>
        <CustomText>Login</CustomText>
      </PrincipalButton>
    </ContainerDinamico>
  );
};

export default SenhaAlterada;

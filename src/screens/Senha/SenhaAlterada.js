import { CustomTitle } from "../../components/Texts/styled";
import ContainerDinamico from "../../components/Containers/index";
import { LogoRecover } from "../../components/Images/styled";
import recoverImage from "../../../assets/images/recover.png";
import TextoDinamico from "../../components/Texts/index";
import PrincipalButton from "../../components/Buttons/PrimaryButton";
import colors from "../../theme/index";

const SenhaAlterada = () => {
  return (
    <ContainerDinamico tAlign="center">
      <LogoRecover source={recoverImage} />
      <CustomTitle>Senha alterada com sucesso!</CustomTitle>
      <PrincipalButton
        mTop="80px"
        onUserPress={() => navigation.navigate("Login")}
      >
        <TextoDinamico fColor={`${colors.branco}`}>Login</TextoDinamico>
      </PrincipalButton>
    </ContainerDinamico>
  );
};

export default SenhaAlterada;

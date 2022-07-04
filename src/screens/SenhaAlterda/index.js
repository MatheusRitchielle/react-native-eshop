import { CustomTitle } from "../../components/CustomTitle/styles";
import ContainerDinamico from "../../components/CustomContainer";
import { LogoHorizontal } from "../../components/CustomImageLogo/styles";
import recoverImage from "../../../assets/images/recover.png";
import { CustomText } from './../../components/CustomText/styles';
import { PrimaryButton } from './../../components/CustomButton/styles';

const SenhaAlterada = () => {
    return (
        <ContainerDinamico tAlign="center">
            <LogoHorizontal source={recoverImage} />
            <CustomTitle>Senha alterada com sucesso!</CustomTitle>
            <PrimaryButton
                onPress={() => navigation.navigate("Login")}
                style={{ marginTop: 80, padding: 0 }}
            >
                <CustomText>Login</CustomText>
            </PrimaryButton>
        </ContainerDinamico>
    );
}

export default SenhaAlterada;
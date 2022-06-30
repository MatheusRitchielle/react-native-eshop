import React from "react";

import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";
import ContainerDinamico from "../../components/CustomContainer";

const Cadastro = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center" style={{}}>
      <CustomTitle>Preencha suas informações</CustomTitle>
<<<<<<< HEAD
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="Nome" />
        <InnerText placeholder="CPF" />
        <InnerText placeholder="Data de Nascimento" />
        <InnerText placeholder="Senha" secureTextEntry={true} />
        <InnerText placeholder="Confirme sua senha" secureTextEntry={true} />
        <PrimaryButton onPress={() => navigation.navigate("Login")}>
          <CustomText onPress={() => navigation.navigate(' ')}>Cadastrar</CustomText>
        </PrimaryButton>
      </View>
    </CustomContainer>
=======
      <InnerText placeholder="Nome" />
      <InnerText placeholder="CPF" keyboardType="numeric" />
      <InnerText placeholder="Data de Nascimento" keyboardType="numeric" />
      <InnerText placeholder="Senha" secureTextEntry={true} />
      <InnerText placeholder="Confirme sua senha" secureTextEntry={true} />
      <PrimaryButton
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: 20 }}
      >
        <CustomText>Cadastrar</CustomText>
      </PrimaryButton>
    </ContainerDinamico>
>>>>>>> leonardo
  );
};

export default Cadastro;

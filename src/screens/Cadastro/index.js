import React from "react";
import { View, StyleSheet } from "react-native";
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { CustomContainer } from "../../components/CustomContainer/styles";
import { CustomTitle } from "../../components/CustomTitle/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";

const Cadastro = ({ navigation }) => {
  return (
    <CustomContainer>
      <CustomTitle>Preencha suas informações</CustomTitle>
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
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default Cadastro;

import React from "react";
import ContainerDinamico from "../../components/CustomContainer";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { CustomTitle } from "../../components/CustomTitle/styles";
import { View } from 'react-native';
import { InnerText } from "../../components/CustomInput/styles";
import { CustomText } from "../../components/CustomText/styles";
import { PrimaryButton } from "../../components/CustomButton/styles";

const CriarSenha = ({ navigation }) => {
  return (
    <ContainerDinamico tAlign="center">
    <FontAwesome5 name="user-lock" size={24} color="black" />
      <CustomTitle>Criar senha</CustomTitle>
      <View style={{ marginTop: 20 }}>
        <InnerText placeholder="Senha" secureTextEntry={true} />
        <Ionicons name="ios-eye-off" size={24} color="black" />
        <InnerText placeholder="Nova senha" secureTextEntry={true} />
        <Ionicons name="ios-eye-off" size={24} color="black" />
        <PrimaryButton
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 80, padding: 0 }}
        >
          <CustomText>Recuperar</CustomText>
        </PrimaryButton>
      </View>
    </ContainerDinamico>
  );
};

export default CriarSenha;
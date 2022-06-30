import styled from "styled-components/native";

export const ContainerCabecalho = styled.View`
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
  flex-direction: row;
  border: 2px solid;
  border-radius: 5px;
`;

export const CardGeneric = styled.View`
  display: flex;
  align-items: stretch;
  align-content: space-between;
  margin: 5px; 
  padding-left: 10 ;
  border: 1px dotted;
  border-left-color: transparent;
  border-right-color : transparent;
  border-top-color: transparent;
`;

export const ContainerCarrinho = styled.View`
  justify-content: space-around;
  padding: 15px;
  flex-direction: row;
`;

export const ButtonCarrinho = styled.Pressable`
  height: 50px;
  width: 120px;
  padding-left: 20px;
  background-color: #61882e;
  margin-top: 22px;
  border-radius: 50;
  align-items: center;
  font-weight: bold;
  justify-content: center;
`;

export const CustomTextCarrinho = styled.Text`
  color: #fff;
  font-size: 15px;
  padding-top: 5px;
  padding-right: 7px;
  margin-right: 13px;
  height: 50px;
  width: 70px;
  text-align: center;
`;

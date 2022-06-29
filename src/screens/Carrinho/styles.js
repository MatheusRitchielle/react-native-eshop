import styled from "styled-components/native";

export const ContainerCarrinho = styled.View`
  justify-content: space-around;
  margin-top: 10px;
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

import styled from "styled-components/native";
import colors from "../../theme/index";

export const ContainerCabecalho = styled.View`
  padding: 5px;
  margin-top: 10px;
  border: 2px solid;
  border-radius: 5px;
  flex-direction: row;
`;

export const CustomText = styled.Text`
  text-align: ${(props) => props.text || "center"};
  font-family: ${(props) => props.font || "Amiko"};
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size || "15"};
  padding-right: ${(props) => props.pdRight || "0"};
  color: ${(props) => props.color || `${colors.fifth}`};
`;

export const CardGeneric = styled.View`
  padding: 5px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const NomeUsuario = styled.View`
  width: 250px;
`;

export const ContainerCarrinho = styled.View`
  padding: 3px;
  flex-direction: row;
  justify-content: space-around;
`;

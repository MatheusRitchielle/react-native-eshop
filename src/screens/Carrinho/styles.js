import styled from "styled-components/native";

export const ContainerCabecalho = styled.View`
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
  flex-direction: row;
  border: 2px solid;
  border-radius: 5px;
`;
export const CustomText = styled.Text`
  text-align: ${(props) => props.text || "center"};
  font-family: ${(props) => props.font || "Amiko"};
  font-weight: ${(props) => props.weight || "normal"};
  font-size: ${(props) => props.size || "15"};
  padding-right: ${(props) => props.pdRight || "0"};
`;

export const CardGeneric = styled.View`
  justify-content: space-around;
  margin-top: 10px;
  padding: 5px;
  flex-direction: row;
`; 

export const ColumnProduct = styled.View`
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 180px;
  padding: 2px;
`;

export const ColumnQtd = styled.View`
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 66px;
  margin-left: 10px;
`;

export const ColumnPrUn = styled.View`
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 66px;
`;

export const ColumnTotal = styled.View`
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 66px;
`;

export const ContainerCarrinho = styled.View`
  justify-content: space-around;
  padding: 3px;
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

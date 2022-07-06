import styled from "styled-components/native";
import colors from "../../theme/index";

export const MainTitle = styled.Text`
  font-size: 26px;
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.secondary};
`;

export const AddButton = styled.Pressable`
  height: 50px;
  width: 120px;
  margin-top: 0;
  font-weight: bold;
  align-self: center;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  color: ${colors.tertiary};
  background-color: ${colors.secondary};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${colors.tertiary};
`;

export const ListaEstilizada = styled.View`
  padding: 8px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${colors.sixth};
`;

export const FotoContainer = styled.View`
  flex-direction: row;
`;

export const FotoEstilizada = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const Shadow = styled.View`
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeparadorList = styled.View`
  height: ${(props) => props.height || "16px"};
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  background-color: ${(props) => props.backgroundColor || `${colors.tertiary}`};
`;

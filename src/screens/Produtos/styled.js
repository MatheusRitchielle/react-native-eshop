import styled from "styled-components/native";
import colors from "../../theme/index";

export const MainTitle = styled.Text`
  color: ${colors.secondary};
  text-align: center;
  font-size: 26px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const AddButton = styled.Pressable`
  height: 50px;
  width: 120px;
  font-weight: bold;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${colors.secondary};
  margin-top: 0;
  color: ${colors.tertiary};
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${colors.tertiary};
`;

export const ListaEstilizada = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.sixth};
    padding: 8px;
    border-radius: 5px;
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


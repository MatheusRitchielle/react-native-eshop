import styled from "styled-components/native";
import colors from "../../theme/index";

export const MainTitle = styled.Text`
  color: ${colors.secondary};
  text-align: center;
  font-size: 26px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const ListText = styled.Text`
  font-size: 16px;
  font-family: "Blinker";
  margin-top: 10;
`;

export const PdColumn = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
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
`;

export const ListaEstilizada = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 5px;
`;

export const FotoEstilizada = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
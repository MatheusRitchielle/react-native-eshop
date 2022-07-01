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

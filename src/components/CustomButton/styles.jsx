import styled from "styled-components/native";
import colors from "../../theme/index";

export const PrimaryButton = styled.Pressable`
  height: 50px;
  width: 120px;
  background-color: ${colors.primary};
  align-self: center;
  border-radius: 50px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const SecondaryButton = styled.Pressable`
  height: 50px;
  width: 250px;
  margin-top: 8px;
  font-weight: bold;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

import styled from "styled-components/native";
import colors from "../../theme/index";

export const PrimaryButton = styled.Pressable`
  height: 50px;
  width: 120px;
  font-weight: bold;
  align-self: center;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: ${colors.primary};
  margin-top: ${(props) => props.margin || 0};
`;

export const SecondaryButton = styled.Pressable`
  height: 20px;
  width: 250px;
  margin-top: 10px;
  font-weight: bold;
  align-self: center;
  justify-content: center;
`;

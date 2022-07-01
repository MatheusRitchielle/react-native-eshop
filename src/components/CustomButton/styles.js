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
  background-color: ${(props) => props.buttonColor || `${colors.primary}`};
  margin-top: 0;
`;

export const SecondaryButton = styled.Pressable`
  width: ${(props) => props.size || "260px"};
  margin-top: ${(props) => props.margin || "10px"};
  font-weight: bold;
  align-self: center;
  justify-content: center;
  text-align: ${(props) => props.text || "center"};
`;

export const PrimaryButtonCS = styled.Pressable`
  width: 204px;
  height: 50px;
  background-color: #61882e;
  mix-blend-mode: normal;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
`;

export const ButtonContainer = styled.Pressable`
  /* margin-top: 8px; */
  font-weight: bold;
  /* justify-content: center;
  align-self: center;
  align-items: center; */
  justify-content: center;
  text-align: ${(props) => props.text || "center"};
`;

import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomText = styled.Text`
  color: ${(props) => props.fontColor || `${colors.secondary}`};
  font-size: ${(props) => props.fontSize || "15px"};
  font-family: "Blinker";
`;

export const CustomTextCS = styled.Text`
  color: #fff;
  font-size: 24px;
  padding: 10px;
  align-self: center;
`;

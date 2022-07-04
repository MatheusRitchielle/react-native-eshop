import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomText = styled.Text`
  color: ${(props) => props.fontColor || `${colors.secondary}`};
  font-size: ${(props) => props.fontSize || "15px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
  align-self: ${(props) => props.aSelf || "center"};
  font-weight: ${(props) => props.fWeight || "none"};
  font-family: "Blinker";
`;

export const CustomTextCS = styled.Text`
  color: #fff;
  font-size: 24px;
  padding: 10px;
  align-self: center;
`;

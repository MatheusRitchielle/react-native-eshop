import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomText = styled.Text`
  color: ${colors.secondary};
  font-size: ${(props) => props.font || "15px"};
  font-family: "Blinker";
`;

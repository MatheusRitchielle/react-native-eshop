import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomContainer = styled.View`
  flex: 1;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  margin-top: ${(props) => props.margin || 0};
  background-color: ${colors.tertiary};
  text-align: ${(props) => props.text || "center"};
`;

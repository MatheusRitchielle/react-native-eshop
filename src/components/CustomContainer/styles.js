import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.tertiary};
`;

export const CustomContainerCS = styled.View`
  flex:1;
  flex-direction: column;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: space-around;
`;

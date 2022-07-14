import styled from "styled-components/native";
import colors from "../../theme/index";

export const CustomContainer = styled.View`
  flex: ${(props) => props.flex || "1"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  background-color: ${colors.branco};
  margin-top: ${(props) => props.margin || "0px"};
`;

export const CustomContainerLista = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.branco};
`;

export const CustomContainerCS = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.creme};
  align-items: center;
  justify-content: space-around;
`;

export const ContainerCatProd = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${colors.branco};
`;

export const ContainerCadastro = styled.View`
  justify-content: space-around;
  width: 350px;
`;
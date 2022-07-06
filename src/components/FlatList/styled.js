import styled from "styled-components/native";
import colors from "../../theme/index";

export const ListaEstilizada = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.sixth};
  padding: 8px;
  border-radius: 5px;
`;

export const FotoContainer = styled.View`
  flex-direction: row;
`;

export const FotoEstilizada = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const SombraFoto = styled.View`
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeparadorLista = styled.View`
  height: ${(props) => props.height || "16px"};
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  background-color: ${(props) => props.backgroundColor || `${colors.tertiary}`};
`;

export const NomeProduto = styled.View`
  width: 150px;
  text-align: center;
`;

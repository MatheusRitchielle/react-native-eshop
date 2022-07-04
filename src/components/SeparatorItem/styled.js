import styled from "styled-components/native";

export const SeparadorItem = styled.View`
  height: ${(props) => props.height || "5px"};
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  background-color: ${(props) => props.backgroundColor || "rgb(60, 98, 85)"};
`;

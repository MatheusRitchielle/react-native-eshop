import styled from "styled-components/native";
import colors from "../../theme/index";

export const ListaEstilizada = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.tertiary};
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 5px;
`;

export const FotoEstilizada = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 80px;
`;
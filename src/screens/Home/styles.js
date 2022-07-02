import styled from "styled-components/native";
import colors from "../../theme/index";

export const PaginationContainer = styled.View`
  display: flex;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const OptionsContainer = styled.View`
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ImagePagination = styled.Image`
  margin: 20px;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

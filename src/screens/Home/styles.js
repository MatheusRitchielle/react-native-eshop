import styled from "styled-components/native";

export const PaginationContainer = styled.View`
  display: flex;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ImagesContainer = styled.View`
  flex-direction: column;
`;
export const ImagePagination = styled.Image`
  margin: 20px;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

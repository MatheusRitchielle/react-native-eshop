import styled from "styled-components/native";
import colors from "../../theme/index"


export const MainTitle = styled.Text`
  color: ${colors.secondary};
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const PdColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 10px;
`;

export const QtColumn  = styled.View`
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 66px;
  margin-left: 10px;
`;

export const PrColumn = styled.View`
  align-items: right;
  justify-content: right;
  justify-items: right;
  width: 66px;
`;
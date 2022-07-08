import styled from "styled-components/native";
import colors from "../../theme/index";

export const PrimaryButton = styled.Pressable`
  height: ${(props) => props.heightSize || "50px"};
  width: ${(props) => props.widthSize || "120px"};
  font-weight: bold;
  align-self: center;
  align-items: ${(props) => props.text || "center"};
  border-radius: ${(props) => props.bRadius || "50px"};
  justify-content: center;
  margin-top: ${(props) => props.marginT || "0px"};
  margin-left: ${(props) => props.marginL || "0px"};
  margin-right: ${(props) => props.marginR || "0px"};
  margin-bottom: ${(props) => props.marginB || "0px"};
  background-color: ${(props) => props.buttonColor || `${colors.verde}`};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: ${(props) => props.marginB || "0px"};
`;

export const SecondaryButton = styled.Pressable`
  width: ${(props) => props.widthSize || "260px"};
  margin-top: ${(props) => props.margin || "10px"};
  font-weight: bold;
  align-self: center;
  align-items: ${(props) => props.text || "center"};
  background-color: ${(props) => props.buttonColor || "none"};
`;

export const PrimaryButtonCS = styled.Pressable`
  width: 204px;
  height: 50px;
  border-radius: 50px;
  mix-blend-mode: normal;
  background-color: ${colors.verde};
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.Pressable`
  font-weight: bold;
  justify-content: center;
  text-align: ${(props) => props.text || "center"};
`;

export const ButtonEditDelete = styled.Pressable`
  mix-blend-mode: normal;
  padding-left: ${(props) => props.pdRight || "15"};
`;

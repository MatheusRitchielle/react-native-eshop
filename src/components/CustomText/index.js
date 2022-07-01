import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({ children, fSize, fColor }) => {
  return (
    <CustomText fontSize={fSize} fontColor={fColor}>
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

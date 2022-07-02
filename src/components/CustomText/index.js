import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({ children, fSize, fColor, mTop }) => {
  return (
    <CustomText fontSize={fSize} fontColor={fColor} marginTop={mTop}>
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

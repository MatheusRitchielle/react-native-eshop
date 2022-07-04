import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({ children, fSize, fColor, mTop, mBottom }) => {
  return (
    <CustomText
      fontSize={fSize}
      fontColor={fColor}
      marginTop={mTop}
      marginBottom={mBottom}
    >
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

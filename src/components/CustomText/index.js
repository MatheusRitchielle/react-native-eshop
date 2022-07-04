import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({
  children,
  fSize,
  fColor,
  mTop,
  mBottom,
  alignSelf,
}) => {
  return (
    <CustomText
      fontSize={fSize}
      fontColor={fColor}
      marginTop={mTop}
      marginBottom={mBottom}
      aSelf={alignSelf}
    >
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

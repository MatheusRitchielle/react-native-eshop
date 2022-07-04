import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({
  children,
  fSize,
  fColor,
  mTop,
  mBottom,
  mRight,
  alignSelf,
  fontWeight,
}) => {
  return (
    <CustomText
      fontSize={fSize}
      fontColor={fColor}
      marginTop={mTop}
      marginBottom={mBottom}
      aSelf={alignSelf}
      fWeight={fontWeight}
      marginRight={mRight}
    >
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

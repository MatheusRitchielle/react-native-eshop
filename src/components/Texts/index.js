import React from "react";
import { CustomText } from "./styled";

const TextoDinamico = ({
  children,
  fSize,
  fColor,
  mTop,
  mBottom,
  mRight,
  alignSelf,
  fontWeight,
  fontFamily,
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
      fFamily={fontFamily}
    >
      {children}
    </CustomText>
  );
};

export default TextoDinamico;

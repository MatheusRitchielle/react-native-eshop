import React from "react";
import { PrimaryButton } from "./styles";

const PrincipalButton = ({ children, width, mTop, tAlign, bColor }) => {
  return (
    <PrimaryButton
      size={width}
      margin={mTop}
      text={tAlign}
      buttonColor={bColor}
    >
      {children}
    </PrimaryButton>
  );
};
export default PrincipalButton;

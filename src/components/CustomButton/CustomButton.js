import React from "react";
import { SecondaryButton } from "./styles";

const CustomButton = ({ children, sizeWidht, mTop, tAlign, bColor }) => {
  return (
    <SecondaryButton
      widthSize={sizeWidht}
      margin={mTop}
      text={tAlign}
      buttonColor={bColor}
    >
      {children}
    </SecondaryButton>
  );
};

export default CustomButton;

import React from "react";
import { SecondaryButton } from "./styled";

const CustomButton = ({
  children,
  onUserPress,
  sizeWidht,
  mTop,
  tAlign,
  bColor,
}) => {
  return (
    <SecondaryButton
      onPress={onUserPress}
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

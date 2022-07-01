import React from "react";
import { PrimaryButton } from "./styles";

const PrincipalButton = ({
  children,
  onUserPress,
  width,
  mTop,
  tAlign,
  bColor,
}) => {
  return (
    <PrimaryButton
      onPress={onUserPress}
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

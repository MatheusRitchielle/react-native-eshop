import React from "react";
import { PrimaryButton } from "./styles";

const PrincipalButton = ({
  children,
  onUserPress,
  width,
  mTop,
  mBottom,
  tAlign,
  bColor,
  height,
  border,
}) => {
  return (
    <PrimaryButton
      onPress={onUserPress}
      widthSize={width}
      marginT={mTop}
      marginB={mBottom}
      text={tAlign}
      buttonColor={bColor}
      heightSize={height}
      bRadius={border}
    >
      {children}
    </PrimaryButton>
  );
};
export default PrincipalButton;

import React from "react";
import { PrimaryButton } from "./styled";

const PrincipalButton = ({
  children,
  onUserPress,
  width,
  mTop,
  mLeft,
  mBottom,
  mRight,
  tAlign,
  bColor,
  height,
  border,
}) => {
  return (
    <PrimaryButton
      text={tAlign}
      marginT={mTop}
      marginB={mBottom}
      marginR={mRight}
      marginL={mLeft}
      bRadius={border}
      widthSize={width}
      heightSize={height}
      buttonColor={bColor}
      onPress={onUserPress}
    >
      {children}
    </PrimaryButton>
  );
};
export default PrincipalButton;

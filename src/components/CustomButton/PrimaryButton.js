import React from "react";
import { PrimaryButton } from "./styles";

const PrincipalButton = ({
  children,
  onUserPress,
  width,
  mTop,
<<<<<<< HEAD
  mLeft,
  mBottom,
  mRight,
=======
  mBottom,
>>>>>>> 7b1a132bf3c6e4927c68e15a3f2f5501d8414479
  tAlign,
  bColor,
  height,
  border,
}) => {
  return (
    <PrimaryButton
<<<<<<< HEAD
=======
      onPress={onUserPress}
      widthSize={width}
      marginT={mTop}
      marginB={mBottom}
>>>>>>> 7b1a132bf3c6e4927c68e15a3f2f5501d8414479
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

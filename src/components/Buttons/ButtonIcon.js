import React from "react";
import { ButtonEditDelete } from "./styled";

const ButtonIcon = ({ children, onUserPress, width, mTop, tAlign, bColor }) => {
  return (
    <ButtonEditDelete
      onPress={onUserPress}
      size={width}
      margin={mTop}
      text={tAlign}
      buttonColor={bColor}
    >
      {children}
    </ButtonEditDelete>
  );
};

export default ButtonIcon;

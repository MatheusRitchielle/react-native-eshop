import React from "react";
import { PrimaryButton, SecondaryButton } from "./styles";

export const MainButton = ({ children, bColor }) => {
  <PrimaryButton buttonColor={bColor}>{children}</PrimaryButton>;
};

const CustomButton = ({ children, width, marginTop, tAlign }) => {
  <SecondaryButton size={width} margin={marginTop} text={tAlign}>
    {children}
  </SecondaryButton>;
};

export default CustomButton;

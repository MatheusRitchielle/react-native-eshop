import React from "react";
import { CustomText } from "./styles";

const TextoDinamico = ({ children, fSize }) => {
  return <CustomText font={fSize}>{children}</CustomText>;
};

export default TextoDinamico;

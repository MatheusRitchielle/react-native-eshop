import React from "react";
import { CustomContainer } from "./styles";

const ContainerDinamico = ({ children, jContent, aItem, mTop, tAlign }) => {
  return (
    <CustomContainer
      justify={jContent}
      align={aItem}
      margin={mTop}
      text={tAlign}
    >
      {children}
    </CustomContainer>
  );
};

export default ContainerDinamico;

import React from "react";
import { CustomContainer } from "./styles";

const ContainerDinamico = ({
  children,
  jContent,
  aItem,
  mTop,
  tAlign,
  fDirection,
}) => {
  return (
    <CustomContainer
      justify={jContent}
      align={aItem}
      margin={mTop}
      text={tAlign}
      flex={fDirection}
    >
      {children}
    </CustomContainer>
  );
};

export default ContainerDinamico;

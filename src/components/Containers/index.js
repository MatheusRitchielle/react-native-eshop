import React from "react";
import { CustomContainer } from "./styled";

const ContainerDinamico = ({
  children,
  jContent,
  aItem,
  mTop,

  fDirection,
}) => {
  return (
    <CustomContainer
      justify={jContent}
      align={aItem}
      margin={mTop}
      flex={fDirection}
    >
      {children}
    </CustomContainer>
  );
};

export default ContainerDinamico;

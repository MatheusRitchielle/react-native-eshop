import React from "react";
import { SeparadorItem } from "./styled";

export function SeparatorItem({
  heightSeparator,
  widthSeparator,
  mTop,
  mBottom,
  bColor,
}) {
  return (
    <SeparadorItem
      height={heightSeparator}
      width={widthSeparator}
      marginTop={mTop}
      marginBottom={mBottom}
      backgroundColor={bColor}
    />
  );
}

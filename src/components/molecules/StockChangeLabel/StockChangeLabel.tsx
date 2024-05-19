import React from "react";
import { getFormatNumber } from "@utils/getFormatNumber";
import Label from "@atoms/Label";
import type { StockChangeLabelProps } from "./StockChangeLabel.types";

const StockChangeLabel = ({ change, ...labelProps }: StockChangeLabelProps) => {
  const labelVariant =
    change > 0 ? ("error" as const) : change === 0 ? ("secondary" as const) : ("primary" as const);

  const prefix = change > 0 ? "+" : "";

  return (
    <Label variant={labelVariant} {...labelProps}>
      {getFormatNumber({ number: change, decimalPoint: 1, prefix, postfix: "%" })}
    </Label>
  );
};

export default StockChangeLabel;

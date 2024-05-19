import React from "react";
import { checkNumType } from "@utils/checkNumType";
import { getFormatNumber } from "@utils/getFormatNumber";
import { flowStockItemVariants } from "./FlowStockItem.styles";
import type { FlotStockItemProps } from "./FlowStockItem.types";

const FlowStockItem = ({ ticker, price, changePercentage }: FlotStockItemProps) => {
  const numType = checkNumType(changePercentage);

  const { root, changePercentageText } = flowStockItemVariants();

  const prefix = changePercentage > 0 ? "+" : "";

  return (
    <div className={root()}>
      <span className="font-bold">{ticker}</span>
      <span>{getFormatNumber({ number: price })}</span>
      <span className={changePercentageText({ numType })}>
        {getFormatNumber({
          number: changePercentage,
          decimalPoint: 1,
          prefix,
          postfix: "%",
        })}
      </span>
    </div>
  );
};

export default FlowStockItem;

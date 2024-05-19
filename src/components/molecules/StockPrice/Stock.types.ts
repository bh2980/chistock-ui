import { ComponentProps } from "react";

export type StockPriceProps = {
  price: number;
  prefix?: string;
  postfix?: string;
  decimalPoint?: number;
  animated?: boolean;
} & ComponentProps<"div">;

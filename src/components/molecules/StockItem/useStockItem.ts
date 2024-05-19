import type { StockItemProps } from "./StockItem.types";

export const useStockItem = (props: StockItemProps) => {
  const { ticker, companyName, tickerAccent, size = "md", ...otherProps } = props;

  return {
    ...otherProps,
    title: tickerAccent ? ticker : companyName,
    subtitle: !tickerAccent ? ticker : companyName,
    size,
    tickerAccent,
  };
};

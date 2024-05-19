export type StockItemProps = {
  src?: string;
  companyName: string;
  ticker: string;
  market?: string;
  currentPrice: number;
  change: number;
  tickerAccent?: boolean;
  size?: "md" | "lg";
};

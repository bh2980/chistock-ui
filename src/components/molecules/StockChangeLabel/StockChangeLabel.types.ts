import type { LabelProps } from "@atoms/Label";

export type StockChangeLabelProps = { change: number } & Omit<LabelProps, "children">;

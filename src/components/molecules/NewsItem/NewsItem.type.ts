import type { ComponentProps } from "react";

export type NewsItemBaseProps = {
  category: string;
  source: string;
  timestamp: number;
  title: string;
  summary: string;
};

export type NewsItemProps = Omit<ComponentProps<"a">, keyof NewsItemBaseProps> & NewsItemBaseProps;

import { tv } from "@utils/customTV";

export const RecommendChartVariants = tv({
  slots: {
    root: "flex gap-md",
    square: "text-primary-on font-bold rounded-md flex justify-center items-center text-lg",
    barChart: "",
    barBg: "fill-surface-container-high",
    bar: "",
    labelText: "text-sm fill-surface-on",
  },
  variants: {
    label: {
      "적극 매수": {
        square: "bg-primary fill-primary-on",
      },
      매수: {
        square: "bg-secondary fill-secondary-on",
      },
      보유: {
        square: "bg-surface-inverse fill-surface-on-inverse",
      },
      매도: {
        square: "bg-error-container-on fill-error-container",
      },
      "적극 매도": {
        square: "bg-error fill-error-on",
      },
    },
    isMaxValue: {
      true: { bar: "fill-secondary" },
      false: { bar: "fill-surface-on/20" },
    },
  },
  compoundVariants: [
    {
      label: "적극 매수",
      isMaxValue: true,
      class: {
        bar: "fill-primary",
      },
    },
    {
      label: "매수",
      isMaxValue: true,
      class: {
        bar: "fill-secondary",
      },
    },
    {
      label: "보유",
      isMaxValue: true,
      class: {
        bar: "fill-surface-inverse",
      },
    },
    {
      label: "매도",
      isMaxValue: true,
      class: {
        bar: "fill-error-container-on",
      },
    },
    {
      label: "적극 매도",
      isMaxValue: true,
      class: {
        bar: "fill-error",
      },
    },
  ],
});

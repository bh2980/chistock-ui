import type { Meta, StoryObj } from "@storybook/react";
import RecommendChart from "./RecommendChart";

const meta = {
  title: "charts/RecommendChart",
  component: RecommendChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RecommendChart>;

export default meta;
type Story = StoryObj<typeof RecommendChart>;

const data = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];

export const Default: Story = {
  render: () => <RecommendChart data={data} width={320} height={128} />,
};

const ActiveBuyData = [
  { label: "적극 매수", value: 18 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];

export const ActiveBuy: Story = {
  render: () => <RecommendChart data={ActiveBuyData} width={320} height={128} />,
};

const BuyData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];

export const Buy: Story = {
  render: () => <RecommendChart data={BuyData} width={320} height={128} />,
};

const HoldData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 17 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];
export const Hold: Story = {
  render: () => <RecommendChart data={HoldData} width={320} height={128} />,
};

const SellData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 13 },
  { label: "적극 매도", value: 2 },
];

export const Sell: Story = {
  render: () => <RecommendChart data={SellData} width={320} height={128} />,
};

const ActiveSellData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 12 },
];

export const ActiveSell: Story = {
  render: () => <RecommendChart data={ActiveSellData} width={320} height={128} />,
};

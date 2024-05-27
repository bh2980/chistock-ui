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
const BuyData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];
const HoldData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 17 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 2 },
];
const SellData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 13 },
  { label: "적극 매도", value: 2 },
];
const ActiveSellData = [
  { label: "적극 매수", value: 8 },
  { label: "매수", value: 10 },
  { label: "보유", value: 7 },
  { label: "매도", value: 3 },
  { label: "적극 매도", value: 12 },
];

export const State: Story = {
  render: () => (
    <div className="flex gap-md flex-wrap justify-center">
      <RecommendChart data={ActiveBuyData} width={320} height={128} />
      <RecommendChart data={BuyData} width={320} height={128} />
      <RecommendChart data={HoldData} width={320} height={128} />
      <RecommendChart data={SellData} width={320} height={128} />
      <RecommendChart data={ActiveSellData} width={320} height={128} />
    </div>
  ),
};

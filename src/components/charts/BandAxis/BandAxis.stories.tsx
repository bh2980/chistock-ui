import type { Meta, StoryObj } from "@storybook/react";
import { scaleBand } from "d3";
import BandAxis from "./BandAxis";

const meta = {
  title: "charts/BandAxis",
  component: BandAxis,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BandAxis>;

export default meta;
type Story = StoryObj<typeof BandAxis>;

const data = [
  { label: 2019, value: 151.8 },
  { label: 2020, value: 242.2 },
  { label: 2021, value: 121.3 },
  { label: 2022, value: 200.7 },
  { label: 2023, value: null }, // 값이 아직 없는 경우
];

const length = 256;

const xScale = scaleBand()
  .domain(data.map((d) => d.label.toString()))
  .range([0, length]);

export const Default: Story = {
  render: () => <BandAxis axisScale={xScale} width={256} height={32} />,
};

export const Orient: Story = {
  render: () => (
    <div className="flex gap-md items-center">
      <BandAxis axisScale={xScale} orient="DOWN" width={256} height={32} />
      <BandAxis axisScale={xScale} orient="UP" width={256} height={32} />
      <BandAxis axisScale={xScale} orient="RIGHT" width={48} height={256} />
      <BandAxis axisScale={xScale} orient="LEFT" width={48} height={256} />
    </div>
  ),
};

export const LabelHide: Story = {
  render: () => <BandAxis width={256} height={32} axisScale={xScale} labelHide />,
};

export const LineHide: Story = {
  render: () => <BandAxis width={256} height={32} axisScale={xScale} lineHide />,
};

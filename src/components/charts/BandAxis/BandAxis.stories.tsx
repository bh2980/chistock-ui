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
  render: () => (
    <svg width={256} height={256}>
      <BandAxis axisScale={xScale} transform="translate(0, 128)" />
    </svg>
  ),
};

export const Direction: Story = {
  render: () => (
    <svg width={512} height={256}>
      <g transform="translate(128, 0)">
        <BandAxis axisScale={xScale} direction="DOWN" transform="translate(0, 5)" />
        <BandAxis axisScale={xScale} direction="UP" transform="translate(0, 245)" />
        <BandAxis axisScale={xScale} direction="RIGHT" transform="translate(280, 0)" />
        <BandAxis axisScale={xScale} direction="LEFT" transform="translate(-24, 0)" />
      </g>
    </svg>
  ),
};

export const LabelHide: Story = {
  render: () => (
    <svg width={256} height={256}>
      <BandAxis axisScale={xScale} transform="translate(0, 128)" labelHide />
    </svg>
  ),
};

export const LineHide: Story = {
  render: () => (
    <svg width={256} height={256}>
      <BandAxis axisScale={xScale} transform="translate(0, 128)" lineHide />
    </svg>
  ),
};

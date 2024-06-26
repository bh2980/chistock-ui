import type { Meta, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";

const meta = {
  title: "charts/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof BarChart>;

const data = [
  { label: "2019", value: 151.8 },
  { label: "2020", value: 242.2 },
  { label: "2021", value: 121.3 },
  { label: "2022", value: 200.7 },
  { label: "2023", value: null }, // 값이 아직 없는 경우
];

export const Default: Story = {
  render: () => <BarChart width={400} height={256} data={data} />,
};

export const Orient: Story = {
  render: () => (
    <div className="flex gap-md">
      <BarChart width={128} height={128} data={data} orient="UP" />
      <BarChart width={128} height={128} data={data} orient="DOWN" />
      <BarChart width={128} height={128} data={data} orient="LEFT" />
      <BarChart width={128} height={128} data={data} orient="RIGHT" />
    </div>
  ),
};

export const ShowLabel: Story = {
  render: () => <BarChart width={400} height={256} data={data} showLabel />,
};

export const Padding: Story = {
  render: () => (
    <div className="flex gap-md">
      <BarChart width={256} height={256} data={data} padding={0.1} />
      <BarChart width={256} height={256} data={data} padding={0.45} />
      <BarChart width={256} height={256} data={data} padding={0.8} />
    </div>
  ),
};

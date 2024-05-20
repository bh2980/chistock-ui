import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta = {
  title: "atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-md">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

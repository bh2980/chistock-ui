import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "./Icon";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <Icon icon="sun" className="text-2xl" />,
};

/** Icon 종류를 설정합니다. */
export const IconCategory: Story = {
  render: () => (
    <div className="flex gap-md text-2xl">
      <Icon icon="moon" />
      <Icon icon="sun" />
      <Icon icon="settings" />
      <Icon icon="search" />
    </div>
  ),
};

export const Title: Story = {
  render: () => <Icon icon="sun" title="라이트 모드" className="text-2xl" />,
};

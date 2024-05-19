import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Divider from "./Divider";

const meta = {
  title: "Atom/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    a11y: { disable: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-sm flex-col items-center">
      <Divider className="w-[200rem]" />
      <Divider className="w-[500rem]">Text</Divider>
    </div>
  ),
};

export const Direction: Story = {
  render: () => (
    <div className="flex gap-2xl">
      <Divider className="h-[200rem]" vertical />
      <Divider className="h-[200rem]" vertical>
        Text
      </Divider>
    </div>
  ),
};

/**
 * Playground에서 Divider 컴포넌트를 직접 테스트해보세요.
 *
 * [Divider Playground로 이동](?path=/story/atom-divider--playground)
 */
export const Playground: Story = {
  args: {
    className: "w-[200rem]",
  },
  render: (args) => (
    <>
      <Divider {...args} />
    </>
  ),
};

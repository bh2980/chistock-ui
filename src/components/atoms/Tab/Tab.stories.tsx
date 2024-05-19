import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Icon from "@atoms/Icon";
import Tab from "./Tab";

const meta = {
  title: "Atom/TabList",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab.TabList defaultSelected={"tab1"}>
      <Tab value="tab1">개요</Tab>
      <Tab value="tab2">낮에 해야할 일</Tab>
      <Tab value="tab3">
        <Icon icon="moon" />
        밤에 해야할 일
      </Tab>
    </Tab.TabList>
  ),
};

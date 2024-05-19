import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Atom/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Label</Label>,
};

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <Label>Label</Label>
        <Label variant="primaryContainer">Label</Label>
      </div>
      <div className="flex gap-md">
        <Label variant="secondary">Label</Label>
        <Label variant="secondaryContainer">Label</Label>
      </div>
      <div className="flex gap-md">
        <Label variant="error">Label</Label>
        <Label variant="errorContainer">Label</Label>
      </div>
    </div>
  ),
};

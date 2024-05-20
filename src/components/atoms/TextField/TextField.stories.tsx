import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@atoms/Icon";
import TextField from "./TextField";

const meta = {
  title: "atoms/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <div>
      <TextField label="Label" placeholder="대체 텍스트" helperText="부가 텍스트" />
    </div>
  ),
};

export const Label: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      <TextField label="Label" />
      <TextField title="타이틀" />
    </div>
  ),
};

export const HelperText: Story = {
  render: () => (
    <div>
      <TextField label="Label" helperText="부가 텍스트" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div>
      <TextField label="Label" required />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-md w-[500rem]">
      <TextField title="title" className="w-[120rem]" />
      <TextField title="title" />
      <TextField title="title" fullWidth />
    </div>
  ),
};

export const IconTextField: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-md">
        <TextField label="ID" leadingIcon={<Icon icon="user-round" />} trailingIcon={<Icon icon="x" />} required />
        <TextField title="Password" leadingIcon={<Icon icon="user-round" />} trailingIcon={<Icon icon="x" />} />
      </div>
    );
  },
};

export const State: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md items-center">
        <TextField label="Enabled" defaultValue="본문 텍스트" helperText="부가 텍스트" />
        <TextField title="Enabled" defaultValue="본문 텍스트" helperText="부가 텍스트" />
      </div>
      <div className="flex gap-md items-center">
        <TextField label="Disabled" disabled helperText="부가 텍스트" />
        <TextField title="Disabled" disabled helperText="부가 텍스트" />
      </div>
      <div className="flex gap-md items-center">
        <TextField label="readOnly" value="본문 텍스트" readOnly helperText="부가 텍스트" />
        <TextField title="readOnly" value="본문 텍스트" readOnly helperText="부가 텍스트" />
      </div>
      <div className="flex gap-md items-center">
        <TextField label="Error" defaultValue="본문 텍스트" error helperText="부가 텍스트" />
        <TextField title="Error" defaultValue="본문 텍스트" error helperText="부가 텍스트" />
      </div>
    </div>
  ),
};

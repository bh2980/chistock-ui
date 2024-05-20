import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@atoms/Icon";
import ToggleButton from "./ToggleButton";

const meta = {
  title: "atoms/Button/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: () => <ToggleButton>Button</ToggleButton>,
};

export const PresseState: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <ToggleButton>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton isIconButton>
          <Icon icon="moon" />
        </ToggleButton>
        <ToggleButton pressed>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton isIconButton pressed>
          <Icon icon="moon" />
        </ToggleButton>
      </div>
      <div className="flex gap-md">
        <ToggleButton variant="ghost">
          <Icon icon="sun" />
          Button
        </ToggleButton>
        <ToggleButton variant="ghost" isIconButton>
          <Icon icon="sun" />
        </ToggleButton>
        <ToggleButton variant="ghost" pressed>
          <Icon icon="sun" />
          Button
        </ToggleButton>
        <ToggleButton variant="ghost" isIconButton pressed>
          <Icon icon="sun" />
        </ToggleButton>
      </div>
    </div>
  ),
};

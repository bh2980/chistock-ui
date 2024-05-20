import type { Meta, StoryObj } from "@storybook/react";
import { exceptProperty } from "@utils/exceptProperty";
import Icon from "@atoms/Icon";
import Button from "./Button";

const meta = {
  title: "atoms/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: "button" },
        type: {
          summary: `"button" | "a"`,
        },
      },
    },
    ...exceptProperty(["onClick", "onMouseEnter", "onTouchStart", "innerRef"]),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
};

export const Variant: Story = {
  render: () => (
    <div className="flex gap-md">
      <Button variant="filled">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <Button variant="filled" color="primary">
          Button
        </Button>
        <Button variant="outlined" color="primary">
          Button
        </Button>
        <Button variant="ghost" color="primary">
          Button
        </Button>
      </div>
      <div className="flex gap-md">
        <Button variant="filled">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="ghost">Button</Button>
      </div>
      <div className="flex gap-md">
        <Button variant="filled" color="danger">
          Button
        </Button>
        <Button variant="outlined" color="danger">
          Button
        </Button>
        <Button variant="ghost" color="danger">
          Button
        </Button>
      </div>
    </div>
  ),
};

export const ButtonRounded: Story = {
  name: "Rounded",
  render: () => (
    <div className="flex gap-md">
      <Button rounded="rounded">Button</Button>
      <Button rounded="circular">Button</Button>
    </div>
  ),
};

/**
 * `size` 속성을 통해 버튼의 크기를 조절할 수 있습니다.
 *
 * - `s`
 * - `m`
 * - `l`
 *
 * 기본값으로 `m`이 설정되어있습니다.
 */
export const ButtonSize: Story = {
  name: "Size",
  render: () => (
    <div className="flex items-center gap-md">
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
    </div>
  ),
};

/**
 * Icon을 단독으로 사용하는 경우 isIconButton 속성을 사용합니다.
 *
 * isIconButton 속성을 사용할 경우 `label` 속성을 필수로 작성해야합니다.
 */
export const IconButton: Story = {
  render: () => (
    <div className="flex gap-md">
      <Button label="다크 모드" isIconButton>
        <Icon icon="moon" />
      </Button>
      <Button>
        <Icon icon="moon" />
        다크 모드
      </Button>
      <Button>
        다크 모드
        <Icon icon="moon" />
      </Button>
    </div>
  ),
};

export const ButtonState: Story = {
  name: "State",
  parameters: {
    pseudo: {
      hover: ".hover",
      active: ".press",
      focusVisible: ".focus",
    },
  },
  render: () => (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-lg">
        <Button>Button</Button>
        <Button className="hover">Button</Button>
        <Button className="press">Button</Button>
        <Button className="focus">Button</Button>
        <Button disabled>Button</Button>
      </div>
    </div>
  ),
};

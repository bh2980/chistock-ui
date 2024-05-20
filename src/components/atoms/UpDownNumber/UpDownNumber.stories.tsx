import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import UpDownNumber from "./UpDownNumber";

const meta = {
  title: "atoms/UpDownNumber",
  component: UpDownNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UpDownNumber>;

export default meta;
type Story = StoryObj<typeof UpDownNumber>;

export const Default: Story = {
  render: () => <UpDownNumber number={0} />,
};

export const Number: Story = {
  render: () => (
    <div className="flex gap-md">
      <UpDownNumber number={0} />
      <UpDownNumber number={1} />
      <UpDownNumber number={2} />
      <UpDownNumber number={3} />
      <UpDownNumber number={4} />
      <UpDownNumber number={5} />
      <UpDownNumber number={6} />
      <UpDownNumber number={7} />
      <UpDownNumber number={8} />
      <UpDownNumber number={9} />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [currentNumber, setNumber] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setNumber(Math.floor(Math.random() * 10));
      }, 2000);

      return () => clearInterval(intervalId);
    }, []);

    return <UpDownNumber number={currentNumber} />;
  },
};

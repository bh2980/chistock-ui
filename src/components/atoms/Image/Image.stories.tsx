import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Image from "./Image";

const meta = {
  title: "Atom/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

const IMAGE_URL = "https://cdn.pixabay.com/photo/2023/10/29/01/32/flamingo-8348527_1280.jpg";

export const Default: Story = {
  render: () => <Image src={IMAGE_URL} alt="테스트 이미지" className="w-[200rem] h-[200rem]" />,
};

/**
 * Image는 `w-` 혹은 `h-` class를 통해 크기를 지정할 수 있습니다.
 *
 * **width는 필수로 지정해야합니다 **
 *
 */
export const ImageSize: Story = {
  render: () => (
    <div className="flex gap-md">
      <Image className="w-[100rem] h-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image className="w-[200rem] h-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image className="w-[100rem] h-[200rem]" alt="테스트 이미지" src={IMAGE_URL} />
    </div>
  ),
};

export const ImageClassName: Story = {
  render: () => (
    <div className="flex gap-md">
      <Image
        src={IMAGE_URL}
        alt="테스트 이미지"
        className="w-[200rem] h-[200rem]"
        imageClassName="overflow-visible left-[50rem]"
      />
      <Image src={IMAGE_URL} alt="테스트 이미지" className="w-[200rem] h-[200rem]" />
      <Image
        src={IMAGE_URL}
        alt="테스트 이미지"
        className="w-[200rem] h-[200rem]"
        imageClassName="overflow-visible right-[50rem]"
      />
    </div>
  ),
};

/**
 * Image는 rounded 속성을 통해 테두리 반경을 조절할 수 있습니다.
 *
 * - `none` : 없음
 * - `xs` : 2px
 * - `s` : 4px
 * - `m` : 8px
 * - `l` : 16px
 * - `circle` : 둥근 테두리
 */
export const ImageRadius: Story = {
  render: () => (
    <div className="flex gap-md">
      <Image rounded="none" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image rounded="xs" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image rounded="sm" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image rounded="md" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image rounded="lg" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
      <Image rounded="circle" className="w-[100rem]" alt="테스트 이미지" src={IMAGE_URL} />
    </div>
  ),
};

/**
 * Playground에서 Image 컴포넌트를 직접 테스트해보세요.
 *
 * [Image Playground로 이동](?path=/story/atom-image--playground)
 */
export const Playground: Story = {
  argTypes: {
    src: {
      control: { type: "text" },
    },
  },
  args: {
    className: "w-[100rem]",
    src: IMAGE_URL,
    alt: "chistock",
  },
  parameters: { a11y: { disable: true } },
  render: (args) => <Image {...args} />,
};

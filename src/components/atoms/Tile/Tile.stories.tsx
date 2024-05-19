import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { exceptProperty } from "@utils/exceptProperty";
import Tile from "../Tile/Tile";

const meta = {
  title: "Atom/Tile/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: `"div"` },
        type: {
          summary: `"div" |  "main" | "section" | "article" | "header" | "nav" | "aside" | "footer"`,
        },
      },
    },
    ...exceptProperty(["innerRef"]),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  render: () => <Tile className="w-[200rem] h-[100rem]">타일 예시</Tile>,
};

/**
 * `renderAs` 속성을 이용해 타일이 렌더링 될 태그를 지정할 수 있습니다.
 *
 * - `div` : div 태그
 * - `main` : main 태그
 * - `article` : article 태그
 * - `section` : section 태그
 * - `header` : header 태그
 * - `nav` : nav 태그
 * - `aside` : aside 태그
 * - `footer` : footer 태그
 *
 * 기본값으로 `div` 태그가 지정되어 있습니다.
 */
export const TileRenderAs: Story = {
  name: "RenderAs",
  render: () => (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <Tile className="w-[200rem] h-[100rem]" renderAs="div">
          div 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="main">
          main 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="article">
          article 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="section">
          section 타일
        </Tile>
      </div>
      <div className="flex gap-md">
        <Tile className="w-[200rem] h-[100rem]" renderAs="header">
          header 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="nav">
          nav 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="aside">
          aside 타일
        </Tile>
        <Tile className="w-[200rem] h-[100rem]" renderAs="footer">
          footer 타일
        </Tile>
      </div>
    </div>
  ),
};

/**
 * `variant` 속성을 이용해 타일을 다양한 형태로 사용할 수 있습니다.
 *
 * - `default` : 가장 기본적인 형태의 타일
 * - `primary` : 배경색이 primary인 타일
 * - `secondary` : 배경색이 secondary인 타일
 *
 * 기본값으로 `default`가 설정되어있습니다.
 */
export const TileVariant: Story = {
  name: "Variant",
  render: () => (
    <div className="flex gap-md">
      <Tile className="w-[200rem] h-[100rem]" variant="default">
        타일 예시
      </Tile>
      <Tile className="w-[200rem] h-[100rem]" variant="primary">
        타일 예시
      </Tile>
      <Tile className="w-[200rem] h-[100rem]" variant="secondary">
        타일 예시
      </Tile>
    </div>
  ),
};

/**
 * `rounded` 속성을 이용해 테두리 반경을 지정할 수 있습니다.
 *
 * - `none` : 없음
 * - `s` : 4px
 * - `m` : 8px
 * - `l` : 16px
 *
 * 기본값으로 `m`가 설정되어있습니다.
 */
export const TileRounded: Story = {
  name: "Rounded",
  render: () => (
    <div className="flex gap-md">
      <Tile className="w-[200rem] h-[100rem]" rounded="none">
        타일 예시
      </Tile>
      <Tile className="w-[200rem] h-[100rem]" rounded="sm">
        타일 예시
      </Tile>
      <Tile className="w-[200rem] h-[100rem]" rounded="md">
        타일 예시
      </Tile>
      <Tile className="w-[200rem] h-[100rem]" rounded="lg">
        타일 예시
      </Tile>
    </div>
  ),
};

/**
 * `padding` 속성을 이용해 타일의 padding 값을 지정할 수 있습니다.
 *
 * - `none` : 없음
 * - `3xs` : 2px
 * - `2xs` : 4px
 * - `xs` : 8px
 * - `s` : 12px
 * - `m` : 16px
 * - `l` : 20px
 * - `xl` : 24px
 * - `2xl` : 32px
 * - `3xl` : 40px
 *
 * 기본값으로 `none`가 설정되어있습니다.
 */
export const TilePadding: Story = {
  name: "Padding",
  render: () => (
    <div className="flex flex-col gap-md">
      <Tile padding="none">타일 예시</Tile>
      <Tile padding="3xs">타일 예시</Tile>
      <Tile padding="2xs">타일 예시</Tile>
      <Tile padding="xs">타일 예시</Tile>
      <Tile padding="sm">타일 예시</Tile>
      <Tile padding="md">타일 예시</Tile>
      <Tile padding="lg">타일 예시</Tile>
      <Tile padding="xl">타일 예시</Tile>
      <Tile padding="2xl">타일 예시</Tile>
      <Tile padding="3xl">타일 예시</Tile>
    </div>
  ),
};

/**
 * Playground에서 Tile 컴포넌트를 직접 테스트해보세요.
 *
 * [Tile Playground로 이동](?path=/story/atom-tile-tile--playground)
 */
export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["div", "header", "footer", "nav", "aside", "main", "section", "article"],
      control: { type: "select" },
    },
  },
  parameters: { a11y: { disable: true } },
  render: (args) => <Tile {...args}>타일 예시</Tile>,
};

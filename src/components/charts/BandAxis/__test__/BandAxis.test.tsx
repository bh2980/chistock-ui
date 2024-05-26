import { composeStory } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Meta, { Default as DefaultStory } from "../BandAxis.stories";

const Default = composeStory(DefaultStory, Meta);

describe("band axis", () => {
  it("에러 없이 렌더링되어야 합니다.", () => {
    render(<Default />);
  });
});

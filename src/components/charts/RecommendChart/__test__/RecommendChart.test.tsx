/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "../RecommendChart.stories";

describe("recommend chart", () => {
  const { Default, ActiveBuy, ActiveSell, Buy, Hold, Sell } = composeStories(stories);

  it("에러 없이 렌더링", () => {
    render(<Default />);
  });

  it("10개의 rect 렌더링", () => {
    const { container } = render(<Default />);

    const bars = container.querySelectorAll("rect");

    expect(bars.length).toBe(10);
  });

  it("적극 매수 데이터에서 적극 매수 텍스트를 보여줘야합니다.", () => {
    const { container } = render(<ActiveBuy />);

    const squareLabel = container.querySelector("svg > text");

    expect(squareLabel).toHaveTextContent("적극 매수");
  });

  it("매수 데이터에서 매수 텍스트를 보여줘야합니다.", () => {
    const { container } = render(<Buy />);

    const squareLabel = container.querySelector("svg > text");

    expect(squareLabel).toHaveTextContent("매수");
    expect(squareLabel).not.toHaveTextContent("적극 매수");
  });

  it("보유 데이터에서 보유 텍스트를 보여줘야합니다.", () => {
    const { container } = render(<Hold />);

    const squareLabel = container.querySelector("svg > text");

    expect(squareLabel).toHaveTextContent("보유");
  });

  it("매도 데이터에서 매도 텍스트를 보여줘야합니다.", () => {
    const { container } = render(<Sell />);

    const squareLabel = container.querySelector("svg > text");

    expect(squareLabel).toHaveTextContent("매도");
    expect(squareLabel).not.toHaveTextContent("적극 매도");
  });

  it("적극 매도 데이터에서 적극 매도 텍스트를 보여줘야합니다.", () => {
    const { container } = render(<ActiveSell />);

    const squareLabel = container.querySelector("svg > text");

    expect(squareLabel).toHaveTextContent("적극 매도");
  });
});

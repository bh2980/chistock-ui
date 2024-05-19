import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import Meta, {
  Negative as NegativeStory,
  Positive as PositiveStory,
} from "../FlowStockItem.stories";

const Positive = composeStory(PositiveStory, Meta);
const Negative = composeStory(NegativeStory, Meta);

// 상대 경로에 맞게 조정하세요

describe("StockChangeLabel", () => {
  it("에러 없이 렌더링", () => {
    render(<Positive />);

    const changePercentageText = screen.getByText("+25.0%");
    const ticker = screen.getByText("AAPL");
    const price = screen.getByText("123,456.00");

    expect(changePercentageText).toBeInTheDocument();
    expect(ticker).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("상승일 경우, text-error 클래스 보유", () => {
    render(<Positive />);

    const changePercentageText = screen.getByText("+25.0%");

    expect(changePercentageText).toHaveClass("text-error");
  });

  it("하락일 경우, text-primary 클래스 보유", () => {
    render(<Negative />);

    const changePercentageText = screen.getByText("-25.0%");

    expect(changePercentageText).toHaveClass("text-primary");
  });
});

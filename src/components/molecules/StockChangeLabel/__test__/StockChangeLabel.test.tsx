/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import React from "react";
import StockChangeLabel from "../StockChangeLabel";

describe("StockChangeLabel", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링", () => {
    render(<StockChangeLabel change={5} data-testid="stock-change-label" />);
  });

  it("props로 전달한 값을 렌더링합니다.", () => {
    render(<StockChangeLabel change={5} data-testid="stock-change-label" />);

    const changePercentage = screen.getByText("+5.0%");

    // 전달한 값이 렌더링되었는지 확인
    expect(changePercentage).toBeInTheDocument();
  });
});

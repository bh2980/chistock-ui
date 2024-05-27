/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import { scaleBand } from "d3-scale";
import { describe, expect, it } from "vitest";
import BandAxis from "../BandAxis";
import type { AxisOrient } from "../BandAxis.types";

const createScale = () => scaleBand().domain(["A", "B", "C", "D"]).range([0, 100]);

describe("BandAxis", () => {
  const defaultProps = {
    axisScale: createScale(),
    orient: "DOWN" as AxisOrient,
    outerTickLength: 6,
    innerTickLength: 6,
    lineHide: false,
    labelHide: false,
    className: "",
  };

  it("에러 없이 렌더링", () => {
    render(<BandAxis width={256} height={32} {...defaultProps} />);
  });

  it("data에 맞는 tick 개수", () => {
    const { container } = render(<BandAxis width={256} height={32} {...defaultProps} />);
    const ticks = container.querySelectorAll("svg > g");
    expect(ticks.length).toBe(4);
  });

  it("lineHide일 때 path, line 태그 hidden", () => {
    const { container } = render(<BandAxis width={256} height={32} {...defaultProps} lineHide />);
    const path = container.querySelector("path");
    const line = container.querySelector("line");

    expect(path).toHaveClass("hidden");
    expect(line).toHaveClass("hidden");
  });

  it("labelHide일 때 text 태그 없음", () => {
    const { container } = render(<BandAxis width={256} height={32} {...defaultProps} labelHide />);
    const text = container.querySelector("text");
    expect(text).toHaveClass("hidden");
  });

  it("orient가 UP | DOWN 일 경우, line의 y2 존재 및 x2 속성 없음", () => {
    ["UP", "DOWN"].forEach((orient) => {
      const { container } = render(
        <BandAxis width={256} height={32} {...defaultProps} orient={orient as AxisOrient} />,
      );
      const line = container.querySelector("line");
      expect(line).toHaveAttribute("y2");
      expect(line).not.toHaveAttribute("x2");
    });
  });

  it("orient가 LEFT | RIGHT 일 경우, line의 x2 존재 및 y2 속성 없음", () => {
    ["LEFT", "RIGHT"].forEach((orient) => {
      const { container } = render(
        <BandAxis width={48} height={256} {...defaultProps} orient={orient as AxisOrient} />,
      );
      const line = container.querySelector("line");
      expect(line).toHaveAttribute("x2");
      expect(line).not.toHaveAttribute("y2");
    });
  });
});

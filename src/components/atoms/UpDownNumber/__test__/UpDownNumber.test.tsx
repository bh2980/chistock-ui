/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import UpDownNumber from "..";

describe("UpDownNumber Component", () => {
  it("renders without errors", () => {
    render(<UpDownNumber number={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Spinner from "../Spinner";

describe("spinner", () => {
  // eslint-disable-next-line jest/expect-expect
  it("에러 없이 렌더링되어야 합니다.", () => {
    render(<Spinner />);
  });
});

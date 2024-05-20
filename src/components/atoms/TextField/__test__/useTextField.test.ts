import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useTextField from "../useTextField";

describe("useTextField", () => {
  it("label이 없을 경우, haveLabel는 false여야합니다.", () => {
    const props = {};

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.haveLabel).toBe(false);
  });

  it("label이 있을 경우, haveLabel는 true여야햡니다..", () => {
    const props = { label: "myTestLabel" };

    const { result } = renderHook(() => useTextField(props));

    expect(result.current.haveLabel).toBe(true);
  });
});

import { describe, expect, test } from "vitest";
import { getAxisOrientConfig } from "@utils/getAxisOrientConfig";

describe("getAxisOrientConfig", () => {
  const startPoint = 0;
  const endPoint = 100;
  const outerTickLength = 10;

  test("returns correct config for UP orientation", () => {
    const result = getAxisOrientConfig({ orient: "UP", startPoint, endPoint, outerTickLength });
    expect(result).toEqual([0, -6, "M0.5,0V10H99.5V0"]);
  });

  test("returns correct config for DOWN orientation", () => {
    const result = getAxisOrientConfig({ orient: "DOWN", startPoint, endPoint, outerTickLength });
    expect(result).toEqual([0, 24, "M0.5,10V0H99.5V10"]);
  });

  test("returns correct config for LEFT orientation", () => {
    const result = getAxisOrientConfig({ orient: "LEFT", startPoint, endPoint, outerTickLength });
    expect(result).toEqual([-24, 6, "M0,0.5H10V99.5H0"]);
  });

  test("returns correct config for RIGHT orientation", () => {
    const result = getAxisOrientConfig({ orient: "RIGHT", startPoint, endPoint, outerTickLength });
    expect(result).toEqual([28, 6, "M10,0.5H0V99.5H10"]);
  });
});

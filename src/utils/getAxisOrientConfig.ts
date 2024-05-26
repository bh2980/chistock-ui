import { AxisOrient } from "@charts/BandAxis/BandAxis.types";

type getAxisOrientConfigParams = {
  orient: AxisOrient;
  startPoint: number;
  endPoint: number;
  outerTickLength: number;
};

export const getAxisOrientConfig = ({ orient, startPoint, endPoint, outerTickLength }: getAxisOrientConfigParams) => {
  const pathConfig: { [key: string]: [number, number, string] } = {
    UP: [0, -6, `M${startPoint + 0.5},0V${outerTickLength}H${endPoint - 0.5}V0`],
    DOWN: [0, 24, `M${startPoint + 0.5},${outerTickLength}V0H${endPoint - 0.5}V${outerTickLength}`],
    LEFT: [-24, 6, `M0,${startPoint + 0.5}H${outerTickLength}V${endPoint - 0.5}H0`],
    RIGHT: [28, 6, `M${outerTickLength},${startPoint + 0.5}H0V${endPoint - 0.5}H${outerTickLength}`],
  };

  return pathConfig[orient];
};

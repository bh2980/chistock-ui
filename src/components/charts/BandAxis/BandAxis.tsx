import { isEven } from "@utils/isEven";
import { BandAxisVariants } from "./BandAxis.styles";
import { BandAxisProps } from "./BandAxis.types";

//useAxis가 필요할지도
const BandAxis = ({
  direction,
  axisScale,
  outerTickLength = 6,
  innerTickLength = 6,
  className,
  ...props
}: BandAxisProps) => {
  const [startPoint, endPoint] = axisScale.range();
  const tickCount = axisScale.domain().length;

  const tickStartPoint =
    (endPoint - startPoint) / 2 -
    axisScale.step() * (isEven(tickCount) ? tickCount / 2 - 0.5 : Math.floor(tickCount / 2));

  const makePath = (direction: "UP" | "DOWN" | "RIGHT" | "LEFT" | undefined): [number, number, string] => {
    switch (direction) {
      case "DOWN":
        return [0, 24, `M${startPoint + 0.5},${outerTickLength}V0H${endPoint - 0.5}V${outerTickLength}`];
      case "RIGHT":
        return [32, 6, `M${outerTickLength},${startPoint + 0.5}H0V${endPoint - 0.5}H${outerTickLength}`];
      case "LEFT":
        return [-24, 6, `M0,${startPoint + 0.5}H${outerTickLength}V${endPoint - 0.5}H0`];
      default:
        return [0, -6, `M${startPoint + 0.5},0V${outerTickLength}H${endPoint - 0.5}V0`];
    }
  };

  const [textDX, textDY, path] = makePath(direction);

  return (
    <g className={BandAxisVariants({ className })} {...props}>
      <path fill="none" d={path}></path>
      {axisScale.domain().map((label, i) => (
        <g
          key={`tick-${i}`}
          transform={
            direction === "LEFT" || direction === "RIGHT"
              ? `translate(0, ${tickStartPoint + axisScale.step() * i})`
              : `translate(${tickStartPoint + axisScale.step() * i}, 0)`
          }
        >
          <line
            x2={direction === "LEFT" || direction === "RIGHT" ? innerTickLength : 0}
            y2={direction === "LEFT" || direction === "RIGHT" ? 0 : innerTickLength}
            fill="none"
          />
          <text dx={textDX} dy={textDY} stroke="none">
            {label}
          </text>
        </g>
      ))}
    </g>
  );
};

export default BandAxis;

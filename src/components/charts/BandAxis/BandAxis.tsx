import { isEven } from "@utils/isEven";
import { BandAxisVariants } from "./BandAxis.styles";
import { BandAxisProps } from "./BandAxis.types";

//useAxis가 필요할지도
const BandAxis = ({
  direction,
  axisScale,
  outerTickLength = 6,
  innerTickLength = 6,
  lineHide,
  labelHide,
  className,
  ...props
}: BandAxisProps) => {
  const [startPoint, endPoint] = axisScale.range();
  const tickCount = axisScale.domain().length;

  const tickStartPoint =
    (endPoint - startPoint) / 2 -
    axisScale.step() * (isEven(tickCount) ? tickCount / 2 - 0.5 : Math.floor(tickCount / 2));

  const pathConfig: { [key: string]: [number, number, string] } = {
    UP: [0, -6, `M${startPoint + 0.5},0V${outerTickLength}H${endPoint - 0.5}V0`],
    DOWN: [0, 24, `M${startPoint + 0.5},${outerTickLength}V0H${endPoint - 0.5}V${outerTickLength}`],
    LEFT: [-24, 6, `M0,${startPoint + 0.5}H${outerTickLength}V${endPoint - 0.5}H0`],
    RIGHT: [28, 6, `M${outerTickLength},${startPoint + 0.5}H0V${endPoint - 0.5}H${outerTickLength}`],
  };

  const [textdX, textdY, path] = (direction && pathConfig[direction]) || pathConfig["DOWN"];

  const isVertical = direction === "LEFT" || direction === "RIGHT";

  return (
    <g className={BandAxisVariants({ className, lineHide })} textAnchor="middle" {...props}>
      <path fill="none" d={path} />
      {axisScale.domain().map((label, i) => (
        <g
          key={`tick-${i}`}
          transform={
            isVertical
              ? `translate(0, ${tickStartPoint + axisScale.step() * i})`
              : `translate(${tickStartPoint + axisScale.step() * i}, 0)`
          }
        >
          <line x2={isVertical ? innerTickLength : 0} y2={isVertical ? 0 : innerTickLength} fill="none" />
          {!labelHide && (
            <text dx={textdX} dy={textdY} stroke="none" className="origin-center">
              {label}
            </text>
          )}
        </g>
      ))}
    </g>
  );
};

export default BandAxis;

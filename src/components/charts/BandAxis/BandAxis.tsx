import { getAxisOrientConfig } from "@utils/getAxisOrientConfig";
import { isEven } from "@utils/isEven";
import { BandAxisProps } from "./BandAxis.types";

const BandAxis = ({
  orient = "DOWN",
  axisScale,
  outerTickLength = 6,
  innerTickLength = 6,
  lineHide,
  labelHide,
  ...props
}: BandAxisProps) => {
  const [startPoint, endPoint] = axisScale.range();
  const tickCount = axisScale.domain().length;
  const isVertical = orient === "LEFT" || orient === "RIGHT";

  const tickStartPoint =
    (endPoint - startPoint) / 2 -
    axisScale.step() * (isEven(tickCount) ? tickCount / 2 - 0.5 : Math.floor(tickCount / 2));

  const [textdX, textdY, path] = getAxisOrientConfig({ orient, startPoint, endPoint, outerTickLength });

  return (
    <g textAnchor="middle" {...props}>
      {!lineHide && <path fill="none" d={path} />}
      {axisScale.domain().map((label, i) => (
        <g
          key={`tick-${i}`}
          transform={
            isVertical
              ? `translate(0, ${tickStartPoint + axisScale.step() * i})`
              : `translate(${tickStartPoint + axisScale.step() * i}, 0)`
          }
        >
          {!lineHide && (
            <line
              x2={isVertical ? innerTickLength : undefined}
              y2={isVertical ? undefined : innerTickLength}
              fill="none"
            />
          )}
          {!labelHide && (
            <text dx={textdX} dy={textdY} stroke="none">
              {label}
            </text>
          )}
        </g>
      ))}
    </g>
  );
};

export default BandAxis;

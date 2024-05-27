import { isEven } from "@utils/isEven";
import { BandAxisVariants } from "./BandAxis.styles";
import { BandAxisProps } from "./BandAxis.types";

const BandAxis = ({
  width,
  height,
  orient = "DOWN",
  axisScale,
  outerTickLength = 6,
  innerTickLength = 6,
  lineHide,
  labelHide,
  className,
  ...props
}: BandAxisProps) => {
  const { root, axisLine, labelText } = BandAxisVariants();

  const [startPoint, endPoint] = axisScale.range();
  const tickCount = axisScale.domain().length;
  const isVertical = orient === "LEFT" || orient === "RIGHT";

  const tickStartPoint =
    (endPoint - startPoint) / 2 -
    axisScale.step() * (isEven(tickCount) ? tickCount / 2 - 0.5 : Math.floor(tickCount / 2));

  const pathConfig: { [key: string]: string } = {
    DOWN: `M${startPoint + 0.5},${outerTickLength}V0H${endPoint - 0.5}V${outerTickLength}`,
    UP: `M${startPoint + 0.5},${height - outerTickLength}V${height}H${endPoint - 0.5}V${height - outerTickLength}`,
    RIGHT: `M${outerTickLength},${startPoint + 0.5}H0V${endPoint - 0.5}H${outerTickLength}`,
    LEFT: `M${width - outerTickLength},${startPoint + 0.5}H${width}V${endPoint - 0.5}H${width - outerTickLength}`,
  };

  const tickAlign = {
    DOWN: `translate(0, 0)`,
    UP: `translate(0, ${height - innerTickLength})`,
    RIGHT: `translate(0, 0)`,
    LEFT: `translate(${width - innerTickLength}, 0)`,
  };

  return (
    <svg width={width} height={height} className={root({ className })} textAnchor="middle" {...props}>
      <path fill="none" d={pathConfig[orient]} className={axisLine({ lineHide })} />
      {axisScale.domain().map((label, i) => (
        <g
          key={`tick-${i}`}
          transform={
            isVertical
              ? `translate(0, ${tickStartPoint + axisScale.step() * i})`
              : `translate(${tickStartPoint + axisScale.step() * i}, 0)`
          }
        >
          <line
            x2={isVertical ? innerTickLength : undefined}
            y2={isVertical ? undefined : innerTickLength}
            fill="none"
            transform={tickAlign[orient]}
            className={axisLine({ lineHide })}
          />
          <text
            stroke="none"
            textAnchor="middle"
            dominantBaseline="central"
            transform={isVertical ? `translate(${width / 2}, 0)` : `translate(0, ${height / 2})`}
            className={labelText({ labelHide })}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default BandAxis;

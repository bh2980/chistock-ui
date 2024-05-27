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

  const path = pathConfig[orient];

  const textAlign = {
    DOWN: [`translate(0, ${innerTickLength + 6})`, undefined, "hanging"], //transform, textAnchor, dominantBaseline
    UP: [`translate(0, -6)`, undefined, undefined],
    RIGHT: [`translate(${innerTickLength + 6}, 0)`, "start", "central"],
    LEFT: [`translate(-6, 0)`, "end", "central"],
  };

  const [transform, textAnchor, dominantBaseline] = textAlign[orient];

  const { root, axisLine, labelText } = BandAxisVariants();

  return (
    <svg width={width} height={height} className={root({ className })} textAnchor="middle" {...props}>
      <path fill="none" d={path} className={axisLine({ lineHide })} />
      {axisScale.domain().map((label, i) => (
        <g
          key={`tick-${i}`}
          transform={
            orient === "DOWN"
              ? `translate(${tickStartPoint + axisScale.step() * i}, 0)`
              : orient === "UP"
                ? `translate(${tickStartPoint + axisScale.step() * i}, ${height - innerTickLength})`
                : orient === "LEFT"
                  ? `translate(${width - innerTickLength}, ${tickStartPoint + axisScale.step() * i})`
                  : `translate(0, ${tickStartPoint + axisScale.step() * i})`
          }
        >
          <line
            x2={isVertical ? innerTickLength : undefined}
            y2={isVertical ? undefined : innerTickLength}
            fill="none"
            className={axisLine({ lineHide })}
          />
          <text
            stroke="none"
            textAnchor={textAnchor}
            dominantBaseline={dominantBaseline}
            transform={transform}
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

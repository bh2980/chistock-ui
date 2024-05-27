import { isEven } from "@utils/isEven";
import { BandAxisVariants } from "./BandAxis.styles";
import { BandAxisProps } from "./BandAxis.types";

// TODO width, height가 없는 반응형 대응이 필요
// TODO 조립형으로 하면 각 컴포넌트 별로 props 분리 및 label 회전, 포맷팅도 가능할 듯 -> 꼭 필요한가? 싶긴 함
const BandAxis = ({
  width,
  height,
  orient = "UP",
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
    UP: `M${startPoint + 0.5},${outerTickLength}V0H${endPoint - 0.5}V${outerTickLength}`,
    DOWN: `M${startPoint + 0.5},${height - outerTickLength}V${height}H${endPoint - 0.5}V${height - outerTickLength}`,
    RIGHT: `M${outerTickLength},${startPoint + 0.5}H0V${endPoint - 0.5}H${outerTickLength}`,
    LEFT: `M${width - outerTickLength},${startPoint + 0.5}H${width}V${endPoint - 0.5}H${width - outerTickLength}`,
  };

  const tickAlign = {
    UP: `translate(0, 0)`,
    DOWN: `translate(0, ${height - innerTickLength})`,
    RIGHT: `translate(0, 0)`,
    LEFT: `translate(${width - innerTickLength}, 0)`,
  };

  return (
    <svg width={width} height={height} className={root({ className })} {...props}>
      <path d={pathConfig[orient]} className={axisLine({ lineHide })} />
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
            transform={tickAlign[orient]}
            className={axisLine({ lineHide })}
          />
          <text
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

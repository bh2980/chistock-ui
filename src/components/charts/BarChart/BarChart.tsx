import { max, scaleBand, scaleLinear } from "d3";
import { barChartVariants } from "./BarChart.styles";
import type { BarChartProps } from "./BarChart.types";

// TODO 반응형 대응
// TODO 애니메이션 설정
// TODO label을 잘리지 않게 하기 위한 labelOffset 설정, label transform, formatting 등 커스텀 설정 필요
const BarChart = ({
  width,
  height,
  data,
  orient = "UP",
  padding = 0.5,
  showLabel,
  labelOffset = 24,
}: BarChartProps) => {
  const isVertical = orient === "UP" || orient === "DOWN";

  const labelRange = isVertical ? width : height;
  const valueRange = isVertical ? height - labelOffset : width - labelOffset;

  const labelScale = scaleBand()
    .domain(data.map((d) => d.label.toString()))
    .range([0, labelRange])
    .padding(padding);

  const valueScale = scaleLinear()
    .domain([0, max(data, (d) => (d.value ? d.value : 0))!])
    .nice()
    .range([0, valueRange]);

  const nullBarHeight =
    data.reduce((acc, cur) => {
      acc += cur?.value ? cur.value : 0;
      return acc;
    }, 0) / data.length;

  const { bar, labelText } = barChartVariants();

  return (
    <svg width={width} height={height}>
      {data.map((data, i) => {
        const rectWidth = isVertical ? labelScale.bandwidth() : valueScale(data.value || nullBarHeight);
        const rectHeight = isVertical ? valueScale(data.value || nullBarHeight) : labelScale.bandwidth();
        const rectX = isVertical ? labelScale(data.label.toString())! : orient === "LEFT" ? 1 : width - rectWidth - 1;
        const rectY = isVertical ? (orient === "UP" ? height - rectHeight - 1 : 1) : labelScale(data.label.toString())!;

        const labelAlign = {
          UP: [rectX + rectWidth / 2, rectY - 16],
          DOWN: [rectX + rectWidth / 2, rectHeight + 16],
          LEFT: [rectWidth + 28, rectY + rectHeight / 2],
          RIGHT: [rectX - 28, rectY + rectHeight / 2],
        };

        const [labelX, labelY] = labelAlign[orient];

        return (
          <g key={`bar-${i}`} textAnchor="middle" dominantBaseline={"central"}>
            <rect
              width={rectWidth}
              height={rectHeight}
              x={rectX}
              y={rectY}
              rx={6}
              strokeDasharray={data.value === null ? "6, 4" : undefined}
              className={bar({ value: Boolean(data.value) })}
            />
            <text x={labelX} y={labelY} className={labelText({ showLabel })}>
              {data.value ? `${data.value}` : "?"}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default BarChart;

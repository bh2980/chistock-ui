import { max, scaleBand, scaleLinear } from "d3";
import { barChartVariants } from "./BarChart.styles";
import type { BarChartProps } from "./BarChart.types";

// TODO 방향 설정이 필요
const BarChart = ({ width, height, data, orient = "UP", padding = 0.5 }: BarChartProps) => {
  const isVertical = orient === "UP" || orient === "DOWN";

  const labelRange = isVertical ? width : height;
  const valueRange = isVertical ? height : width;

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

  return (
    <svg width={width} height={height}>
      {data.map((data, i) => {
        const rectWidth = isVertical ? labelScale.bandwidth() : valueScale(data.value || nullBarHeight);
        const rectHeight = isVertical ? valueScale(data.value || nullBarHeight) : labelScale.bandwidth();
        const rectX = isVertical ? labelScale(data.label.toString()) : orient === "LEFT" ? 0 : width - rectWidth;
        const rectY = isVertical ? (orient === "UP" ? height - rectHeight : 0) : labelScale(data.label.toString());

        console.log(data);

        return (
          <rect
            key={`bar-${i}`}
            width={rectWidth}
            height={rectHeight}
            x={rectX}
            y={rectY}
            rx={6}
            strokeDasharray={data.value === null ? "6, 4" : undefined}
            className={barChartVariants({ value: Boolean(data.value) })}
          />
        );
      })}
    </svg>
  );
};

export default BarChart;

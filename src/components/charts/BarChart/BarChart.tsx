import { max, scaleBand, scaleLinear } from "d3";
import { barChartVariants } from "./BarChart.styles";
import type { BarChartProps, BarProps } from "./BarChart.types";

const Bar = ({ xScale, yScale, data, nullBarHeight = 0, rx, labelPostfix = "", ...props }: BarProps) => {
  const rectWidth = xScale.bandwidth();
  const rectHeight = yScale(0) - yScale(data.value || nullBarHeight);
  const rectX = xScale(data.label.toString())!;
  const rectY = yScale(data.value || nullBarHeight);

  const labelOffset = 12;

  return (
    <g {...props}>
      <rect
        width={rectWidth}
        height={rectHeight}
        x={rectX}
        y={rectY}
        rx={rx}
        stroke={data.value === null ? "inherit" : undefined}
        strokeDasharray={data.value === null ? "6, 4" : undefined}
        fill={data.value === null ? "none" : undefined}
      />
      <text x={rectX + rectWidth / 2} y={rectY - labelOffset} className="stroke-none">
        {data.value ? `${data.value}${labelPostfix}` : "?"}
      </text>
    </g>
  );
};

// TODO 방향 설정이 필요
const BarChart = ({ width, height, data, padding = 0.5 }: BarChartProps) => {
  const xScale = scaleBand()
    .domain(data.map((d) => d.label.toString()))
    .range([0, width])
    .padding(padding);

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => (d.value ? d.value : 0))!])
    .nice()
    .range([height, 0]);

  const nullBarHeight =
    data.reduce((acc, cur) => {
      acc += cur?.value ? cur.value : 0;
      return acc;
    }, 0) / data.length;

  const { bar } = barChartVariants();

  return (
    <svg width={width} height={height}>
      {data.map((data, i) => {
        return (
          <Bar
            key={`bar-${i}`}
            xScale={xScale}
            yScale={yScale}
            data={data}
            rx="6"
            nullBarHeight={nullBarHeight}
            textAnchor="middle"
            className={bar()}
          />
        );
      })}
    </svg>
  );
};

export default BarChart;

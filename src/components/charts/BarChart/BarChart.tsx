import { max, scaleBand, scaleLinear } from "d3";
import BandAxis from "@charts/BandAxis";
import { barChartVariants } from "./BarChart.styles";
import type { BarChartProps, BarProps } from "./BarChart.types";

//TODO useBar를 통한 속성 제어가 필요할지도?
//useBar가 있으면 nullBarHeight를 별도로 제공해줄 필요가 없을수도?
const Bar = ({
  xScale,
  yScale,
  data,
  nullBarHeight = 0,
  animationDuration = "0.3s",
  rx,
  labelPostfix = "",
  ...props
}: BarProps) => {
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
      >
        <animate attributeName="height" from="0" to={rectHeight} dur={animationDuration} fill="freeze" />
        <animate attributeName="y" from={yScale(0)} to={rectY} dur={animationDuration} fill="freeze" />
      </rect>
      <text x={rectX + rectWidth / 2} y={rectY - labelOffset} className="stroke-none">
        {data.value ? `${data.value}${labelPostfix}` : "?"}
        <animate
          attributeName="y"
          from={yScale(0) - labelOffset}
          to={rectY - labelOffset}
          dur={animationDuration}
          fill="freeze"
        />
      </text>
    </g>
  );
};

// TODO useBar와 useAxis를 이용하면 줄일 수 있을 지도?
const BarChart = ({ width, height, data, padding = 0.5 }: BarChartProps) => {
  const margin = { x: 0, y: 32 };

  const xScale = scaleBand()
    .domain(data.map((d) => d.label.toString()))
    .range([margin.x, width - margin.x])
    .padding(padding);

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => (d.value ? d.value : 0))!])
    .nice()
    .range([height - margin.y, margin.y]);

  const nullBarHeight =
    data.reduce((acc, cur) => {
      acc += cur?.value ? cur.value : 0;
      return acc;
    }, 0) / data.length;

  const { bar, xAxis } = barChartVariants();

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
      <BandAxis axisScale={xScale} transform={`translate(0, ${height - margin.y})`} className={xAxis()} lineHide />
    </svg>
  );
};

export default BarChart;

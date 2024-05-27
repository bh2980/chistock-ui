import { scaleBand, scaleLinear, sum } from "d3";
import BandAxis from "@charts/BandAxis";
import { RecommendChartVariants } from "./RecommendChart.styles";
import { RecommendChartProps, RecommendLabelType } from "./RecommendChart.types";

// TODO 반응형 처리 필요
// TODO 나중에 Bar 애니메이션 처리하면서 Bar 컴포넌트 따로 빼서 BarChart랑 Bar 컴포넌트 공유하기
const RecommendChart = ({ width, height, data, className, ...props }: RecommendChartProps) => {
  const total = sum(data, (d) => d.value);

  const labelScale = scaleBand()
    .domain(data.map((d) => d.label.toString()))
    .range([0, height])
    .padding(0.6);

  const bandAxisWidth = 64;
  const barChartWidth = width - (bandAxisWidth + height);

  const valueScale = scaleLinear().domain([0, total]).range([0, barChartWidth]);

  const { label: maxLabel, value: maxValue } = data.reduce(
    (acc, cur) => {
      if (acc.value <= cur.value) {
        acc = cur;
      }

      return acc;
    },
    { label: "", value: -1 },
  );

  const { root, bar, barBg, barChart, labelText, square } = RecommendChartVariants();

  return (
    <div className={root({ className })} {...props}>
      <svg width={height} height={height} className={square({ label: maxLabel as RecommendLabelType })}>
        <text textAnchor="middle" dominantBaseline={"central"} transform={`translate(${height / 2}, ${height / 2})`}>
          {maxLabel}
        </text>
      </svg>
      <svg width={barChartWidth} className={barChart()}>
        {data.map((d, i) => {
          return (
            <g key={`bar-${i}`}>
              <rect
                width={valueScale(total)}
                height={labelScale.bandwidth()}
                y={labelScale(d.label.toString())}
                rx={6}
                className={barBg()}
              />
              <rect
                width={valueScale(d.value)}
                height={labelScale.bandwidth()}
                y={labelScale(d.label)}
                rx={6}
                className={bar({ label: maxLabel as RecommendLabelType, isMaxValue: maxValue === d.value })}
              />
            </g>
          );
        })}
      </svg>
      <BandAxis
        axisScale={labelScale}
        orient="RIGHT"
        width={bandAxisWidth}
        height={height}
        className={labelText()}
        lineHide
      />
    </div>
  );
};

export default RecommendChart;

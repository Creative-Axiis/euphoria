// Chart.tsx
import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption
} from 'echarts/components';
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | BarSeriesOption
  | LineSeriesOption
>;

const Chart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    // Sample data
    const evaporationData = [
      34, 54, 74, 150, 91, 74, 98, 74, 133, 74, 54, 98
    ];
    const temperatureData = [
      34, 54, 74, 150, 91, 74, 98, 74, 133, 74, 54, 98
    ];

    // Calculate dynamic max values for y-axes
    const maxEvaporation = Math.max(...evaporationData);
    const yAxisMaxBar = maxEvaporation * 1.2; // Add 20% padding for the bar chart

    const maxTemperature = Math.max(...temperatureData);
    const yAxisMaxLine = maxTemperature * 1.2; // Add 20% padding for the line chart

    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ],
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#E9E9E9',
              width: 2
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '#7C818A',
            margin: 20
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: yAxisMaxBar, // Dynamic max value for relative height scaling of bar chart
          interval: yAxisMaxBar / 5, // Divide y-axis into 5 intervals
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        {
          type: 'value',
          min: 0,
          max: yAxisMaxLine, // Dynamic max value for relative height scaling of line chart
          interval: yAxisMaxLine / 5, // Divide y-axis into 5 intervals
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      grid: {
        top: '20px',
        left: '10%',
        right: '10%',
        height: '133px', // Set grid height to 133px
      },
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: (value) => `${value} ml`
          },
          barWidth: 46.75,
          barGap: '24%',
          itemStyle: {
            borderRadius: [5, 5, 5, 5]
          },
          data: evaporationData
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: (value) => `${value} °C`
          },
          lineStyle: {
            color: '#5654D4',
            width: 2
          },
          itemStyle: {
            color: '#5654D4'
          },
          symbol: 'circle',
          symbolSize: 8,
          data: temperatureData
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="main" style={{ height: '100%', width: '100%' }}></div>;
};

export default Chart;

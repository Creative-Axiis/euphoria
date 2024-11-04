// Chart.tsx
import React, { useEffect, useRef } from 'react';
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
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartDom = chartRef.current!;
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
            show: false // Disable axis pointer for x-axis to remove month name on hover
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
            margin: 20,
            fontSize: 13,
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: 16,
            overflow: 'break'
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
        left: '24px', // Adjust left margin
        right: '24px', // Adjust right margin
        bottom: '40px', // Adjust bottom margin to make space for the line above the months
        containLabel: true // Ensure the grid contains the labels
      },
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: (value) => `${value} ml`
          },
          barWidth: '46.75px', // Set bar width to 46.75px
          barGap: '24px', // Set gap between categories to 24px
          itemStyle: {
            color: '#5654D4', // Set bar color
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
          symbol: 'image://Dot.svg', // Use Dot.svg as the symbol
          symbolSize: [16, 16], // Set the size of the symbol to match the SVG dimensions
          data: temperatureData
        }
      ],
      graphic: [
        {
          type: 'line',
          shape: {
            x1: 0,
            y1: '100%', // Align with the bottom of the chart
            x2: '100%',
            y2: '100%' // Align with the bottom of the chart
          },
          style: {
            stroke: '#E9E9E9',
            lineWidth: 1
          }
        }
      ]
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ height: '100%', width: '100%' }}></div>;
};

export default Chart;

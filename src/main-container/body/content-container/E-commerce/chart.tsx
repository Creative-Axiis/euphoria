import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    // Remove type annotation and let TypeScript infer the type
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'  // Changed from 'cross' to 'none'
        }
      },
      grid: {
        top: 20,        // Changed from 0 to 20px
        left: 24,        // Changed back to 24px for left padding
        right: 24,       // Changed back to 24px for right padding
        bottom: 52,     // Increased to 52 to move content up
        containLabel: false
      },
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: '#E9E9E9',
            width: 1,
            type: 'solid'  // Added to match the solid border style
          },
          onZero: true,    // Changed to true
          symbol: ['none', 'none']
        },
        boundaryGap: true,  // Added to ensure proper spacing
        offset: 12,         // Added offset to move x-axis line down
        axisTick: { show: false },
        axisLabel: {
          color: '#7C818A',
          fontSize: 13,
          fontFamily: 'Inter',
          fontWeight: 500
        },
        axisPointer: {
          show: false  // Added this to completely disable x-axis pointer
        }
      }],
      yAxis: [{
        type: 'value',
        show: false,
        max: 600  // Increased from 500 to allow taller bars
      }, {
        type: 'value',
        show: false,
        max: 1000  // Keep this the same for dots
      }],
      series: [
        {
          type: 'bar',
          barWidth: 46.75,
          barGap: '24px',     // Add gap between bars
          itemStyle: {
            color: '#5654D4',
            borderRadius: [5, 5, 5, 5]
          },
          // Increased bar heights by ~1.5x
          data: [100, 190, 280, 337, 217, 205, 298, 205, 324, 205, 190, 298]
        },
        {
          // Descending line
          type: 'line',
          yAxisIndex: 1,
          symbol: 'none',
          lineStyle: {
            color: '#5654D4',
            width: 2
          },
          // Connect the dots properly
          data: [[-1, 800], [0, 680]],  // Ensure it connects to the first dot
          xAxisIndex: 0,  // Use the same xAxis as the main line
          z: 2  // Ensure line appears above other elements
        },
        {
          // Line series with adjusted values (reduced by ~12%)
          type: 'line',
          yAxisIndex: 1,
          symbol: 'image://Dot.svg',  // Changed from 'circle' to use Dot.svg
          symbolSize: [16, 16],       // Adjust size to match your SVG dimensions
          lineStyle: {
            color: '#5654D4',
            width: 2
          },
          itemStyle: {
            color: '#5654D4'
          },
          // Decreased values to move line up
          data: [680, 700, 720, 800, 710, 690, 720, 690, 740, 690, 680, 720]
        }
      ]
    };

    chart.setOption(option as any); // Use type assertion as a last resort

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ height: '252px', width: '100%' }} />;
};

export default Chart;

'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ComparisonGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const options = {
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['0', '25', '50', '75', '100'],
      },
      yAxis: { type: 'value' },
      series: [
        {
          data: [0, 30, 72, 90, 100],
          type: 'line',
          smooth: true,
        },
      ],
    };
    chart.setOption(options);
    return () => chart.dispose();
  }, []);

  return (
    <div className="bg-red-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Comparison Graph</h2>
      <div ref={chartRef} style={{ width: '100%', height: 250 }}></div>
    </div>
  );
}

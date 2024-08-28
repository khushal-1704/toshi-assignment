import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

interface Props {
  chartData: any;
  title: string;
}

const LineChart: React.FC<Props> = ({ chartData, title }) => {
  return (
    <div className="p-2 border-[1px] border-gray-200 rounded-lg min-w-[300px] w-[70%] my-2">
      <div className="text-xl text-center">{title}</div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
            },
            legend: {
              display: false,
              fullSize: true,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;

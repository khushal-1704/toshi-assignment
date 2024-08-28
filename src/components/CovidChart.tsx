import React, { useEffect, useState } from "react";
import LineChart from "./Common/LineChat";
import { convertChartData, createChartDataSet } from "../utils/helper";

export interface chartsDataProps {
  cases: Object;
  deaths: Object;
  recovered: Object;
}

interface Props {
  chartData: chartsDataProps;
}

export interface chartItemProp {
  year: string
  value: number;
}

const CovidChart: React.FC<Props> = ({ chartData }) => {
  const [activeCasesChart, setActiveCasesChart] = useState<any>();
  const [recoveryCasesChart, setRecoveryChartData] = useState<any>();
  const [deathCasesChart, setDeathCasesChartData] = useState<any>();

  useEffect(() => {
    if (chartData?.cases) {
      const casesData = convertChartData(chartData?.cases);
      const recoveredData = convertChartData(chartData?.recovered);
      const deathData = convertChartData(chartData?.deaths);
      setActiveCasesChart(
        createChartDataSet("Active Cases", casesData, {
          borderColor: "rgb(51, 204, 255)",
          borderWidth: 0.5,
          tension: 0.1,
        })
      );
      setRecoveryChartData(
        createChartDataSet("Recovery", recoveredData, {
          borderColor: "rgb(138, 202, 43)",
          borderWidth: 1,
        })
      );
      setDeathCasesChartData(
        createChartDataSet("Deaths", deathData, {
          borderColor: "rgb(255, 153, 0)",
          borderWidth: 1,
        })
      );
    }
  }, [chartData]);

  return (
    <div className="p-2 flex flex-col justify-center items-center">
      {activeCasesChart && (
        <LineChart chartData={activeCasesChart} title="Total cases" />
      )}
      {recoveryCasesChart && (
        <LineChart chartData={recoveryCasesChart} title="Total Recoveries" />
      )}
      {deathCasesChart && (
        <LineChart chartData={deathCasesChart} title="Total Deaths" />
      )}
    </div>
  );
};

export default CovidChart;

import { chartItemProp } from "../components/CovidChart";

export const convertChartData = (dataObject: any) => {
  const result = [];
  for (const [key, value] of Object.entries(dataObject)) {
    result.push({
      year: key,
      value: value,
    });
  }
  return result;
};

export const createChartDataSet = (
  label: string = "",
  data: any = [],
  chartStyle: any = {}
) => {
  console.log(data);
  return {
    labels: data.map((data: chartItemProp) => data.year),
    datasets: [
      {
        label: label,
        data: data.map((data: chartItemProp) => data.value),
        ...chartStyle,
      },
    ],
  };
};

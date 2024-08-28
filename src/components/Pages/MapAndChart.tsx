import { useQuery } from "@tanstack/react-query";

import CovidInfo from "../CovidInfo";
import CovidChart from "../CovidChart";
import Maps from "../Common/Maps";

const MapAndChart = () => {
  const {
    data: covidAllData,
    isLoading: covidInfoLoading,
    isError: infoError
  } = useQuery({
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((response) =>
        response.json()
      ),
    queryKey: ["covidInfo"],
  });
  const { data: covidChart, isError: chardataError } = useQuery({
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (response) => response.json()
      ),
    queryKey: ["covidChart"],
  });
  const { data: covidMapData, isError: mapdataError } = useQuery({
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json()
      ),
    queryKey: ["covidMap"],
  });

  return (
    <section className="flex flex-col justify-center">
      {!infoError && <div className="flex justify-center">
        <CovidInfo
          isLoading={covidInfoLoading}
          acitveCases={covidAllData?.active}
          totalDeaths={covidAllData?.deaths}
          totalRecovered={covidAllData?.recovered}
          totalTest={covidAllData?.tests}
        />
      </div>}
     {!chardataError && <CovidChart chartData={covidChart} />}
      {!mapdataError && <div className="flex items-center justify-center">{covidMapData && <Maps mapData={covidMapData} />}</div>}
    </section>
  );
};

export default MapAndChart;

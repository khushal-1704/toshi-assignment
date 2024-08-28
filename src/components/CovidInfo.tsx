import React from "react";
import CountUp from "react-countup";

import Loader from "./Common/Loader";

interface Props {
  acitveCases?: number;
  totalTest?: number;
  totalDeaths?: number;
  totalRecovered?: number;
  isLoading: boolean;
}

const CovidInfo: React.FC<Props> = ({
  acitveCases = 0,
  totalDeaths = 0,
  totalRecovered = 0,
  totalTest = 0,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div
        role="status"
        className="w-[60%] relative flex items-center justify-center h-24 rounded-lg "
      >
        <Loader fullScreen />
      </div>
    );
  }
  return (
    <div className="min-w-[300px] w-[70%] flex flex-wrap border-2 rounded-2xl p-5 lg:mt-0">
      <div className="flex flex-col min-w-36 mt-5 lg:mt-0 items-center flex-1 mx-1 justify-center">
        <p className="text-2xl text-orange-600 font-medium">Active</p>
        <CountUp
          start={0}
          end={acitveCases}
          className="font-semibold text-base lg:mt-2"
          duration={1.4}
        />
      </div>
      <div className="flex flex-col min-w-36 mt-5 lg:mt-0 items-center flex-1 mx-1 justify-center">
        <p className="text-2xl text-blue-600 font-medium">Tests</p>
        <CountUp
          start={0}
          end={totalTest}
          className="font-semibold text-base lg:mt-2 "
          duration={1.4}
        />
      </div>
      <div className="flex flex-col min-w-36 mt-5 lg:mt-0 items-center flex-1 mx-1 justify-center">
        <p className="text-2xl text-red-500 font-medium">Deaths</p>
        <CountUp
          start={0}
          end={totalDeaths}
          className="font-semibold text-base lg:mt-2"
          duration={1.4}
        />
      </div>
      <div className="flex flex-col min-w-36 mt-5 lg:mt-0 items-center flex-1 mx-1 justify-center">
        <p className="text-2xl text-green-400  font-medium">Recovered</p>
        <CountUp
          start={0}
          end={totalRecovered}
          className="font-semibold text-base lg:mt-2"
          duration={1.4}
        />
      </div>
    </div>
  );
};

export default CovidInfo;

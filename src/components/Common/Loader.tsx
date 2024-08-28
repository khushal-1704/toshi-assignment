import React from "react";

interface Props {
  fullScreen?: boolean;
}

const Loader: React.FC<Props> = ({ fullScreen = false }) => {
  const showLoader = () => {
    return (
      <div className="absolute top-1/2 left-1/2 z-20 -translate-y-1/2  -translate-x-1/2">
        <div
          className={`after:contents-[''] flex h-full items-center justify-center after:h-[40px] after:w-[40px] after:animate-spin after:rounded-[50%] after:border-[3px] after:border-['#D9D9D9'] after:border-t-blue-500 `}
        ></div>
      </div>
    );
  };
  if (fullScreen) {
    return <div className="h-screen">{showLoader()}</div>;
  }
  return showLoader();
};

export default Loader;

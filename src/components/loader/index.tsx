import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <Spin className="w-full mt-60" size="large" />
    </React.Fragment>
  );
};
export default Loader;

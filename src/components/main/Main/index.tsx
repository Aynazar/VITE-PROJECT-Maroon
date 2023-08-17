import { memo } from "react";
import Inner from "../../common/Inner";
import Bestsellers from "../../common/Bestsellers";
import Banner from "../../common/Banner";

const Main = () => {
  return (
    <>
      <Inner />

      <Bestsellers />

      <Banner />
    </>
  );
};

export default memo(Main);

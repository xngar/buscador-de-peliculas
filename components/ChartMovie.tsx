import React from "react";
import { Flex, Progress } from "antd";
import type { ProgressProps } from "antd";

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

type ChartMovieProps = {
  voto: number; // The type of the voto prop is number
};

const ChartMovie: React.FC<ChartMovieProps> = ({ voto }) => (
  <Flex vertical gap="middle" className="text-white">
    <Progress
      type="circle"
      percent={voto * 10}
      strokeColor={twoColors}
      className="text-white"
    />
  </Flex>
);

export default ChartMovie;

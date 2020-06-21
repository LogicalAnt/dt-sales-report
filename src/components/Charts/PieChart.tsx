import React from "react";
import { Pie } from "react-chartjs-2";

interface PieDataType {
  labels: Array<any>;
  datasets: Array<object>;
}

export const PieChart = ({ labels, datasets }: PieDataType) => {
  return <Pie data={{ labels, datasets }} />;
};

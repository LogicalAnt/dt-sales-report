import React from "react";
import { Bar } from "react-chartjs-2";
//import { apidata } from "./data";

//const prods = new Set();

// apidata.map((item) => {
//   return prods.add(item.product);
// });
//["MotoTracker", "CarTracker", "AssetLock", "EagleCam"]

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr"],
//   datasets: [
//     {
//       label: "MotoTracker",
//       backgroundColor: "#28a745",
//       data: [15, 20, 30, 40],
//     },
//     {
//       label: "CarTracker",
//       backgroundColor: "#000",
//       data: [20, 40, 15, 45],
//     },
//     {
//       label: "AssetLock",
//       backgroundColor: "#f63a3a",
//       data: [25, 14, 25, 30],
//     },
//     {
//       label: "EagleCam",
//       backgroundColor: "#a63a3a",
//       data: [17, 12, 47, 15],
//     },
//   ],
// };
interface BarDataType {
  labels: Array<any>;
  datasets: Array<object>;
}

export const BarChart = ({ labels, datasets }: BarDataType) => {
  return (
    <Bar
      data={{ labels, datasets }}
      width={250}
      height={250}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
};

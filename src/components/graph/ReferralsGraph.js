import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["", "Sales", "Profit"],
    ["Year", 100, 60],
    ["Year 1", 200, 150],
    ["Year 2", 30, 100],
    ["Year 3", 40, 81],
    ["Year 4", 50, 34],
    ["Year 5", 150, 130],
  ];
  
  export const options = {
    title: "",
    chartArea: { width: "50%" },
    colors: ["#8497b0", "#44546a"],
    hAxis: {
      title: "",
      minValue: 20,
    },
    vAxis: {
      title: "",
    },
  };

export function ReferralsGraph() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

import React from "react";
import { Chart } from "react-google-charts";

export function FinancialPerformanceImpactGraph({dataInput}) {
  const data = [
    ["City", "Profit", "Sales", "Valuation"],
    ["Year 1", dataInput.price, 1000000,1400000],
    ["Year 2", 800000, 1000000,1400000],
    ["Year 3", 800000, 1000000,1400000],
    ["Year 4", 800000, 1000000,1400000],
    ["Year 5", 800000, 1000000,1400000],
  ];

  const options = {
    title: "",
    chartArea: { width: "50%" },
    colors: ["#8497b0", "#44546a", "#072f67"],
    hAxis: {
      title: "Your Projection",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
  };

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

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["APV", "Sigra", "Camry", "Innova", "Alphard", "Brio"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 7, 8, 1, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(0, 0, 0, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <Container style={{ width: "50%" }}>
      <h2 className="text-center">Chart</h2>
      <Pie data={data} />
    </Container>
  );
};

export default PieChart;

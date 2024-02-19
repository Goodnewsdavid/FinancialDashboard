import React from "react";
import "../../index.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "REVENUE/EXPENSE ",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue Projection",
      data: labels.map(() =>
        faker.datatype.number({ min: 500000, max: 10000000 })
      ),
      borderColor: "rgb(255, 99, 132)",
      fill: "end",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Expenses",
      data: labels.map(() =>
        faker.datatype.number({ min: 500, max: 10000000 })
      ),
      borderColor: "rgb(53, 162, 235)",
      fill: "end",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function LineChart() {
  return (
    <div style={styles.line_container} className="line_container">
      <Line options={options} data={data} />
    </div>
  );
}

const styles = {
  line_container: {
    width: "680px",
    height: "100%",
    backgroundColor: "#fff",
    marginRight: "10px",
    marginLeft: "10px",
    padding: "10px",
    borderRadius: "6px",
  },
};

export default LineChart;

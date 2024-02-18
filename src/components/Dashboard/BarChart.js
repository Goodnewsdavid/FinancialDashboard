import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Monthly Income vs Expenses",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Income",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      barThickness: 30,
      backgroundColor: "rgb(47, 44, 216)",
    },
    {
      label: "Expenses",
      barThickness: 30,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(47, 44, 216, 0.3)",
    },
  ],
};

function BarChart() {
  return (
    <div style={styles.line__container}>
       <Bar options={options} data={data} />;
    </div>
  );
}

const styles = {
  line__container: {
    width: "56%",
    backgroundColor: "#fff",
    marginRight: "10px",
    padding: "10px",
    borderRadius: "6px",
  },
};

export default BarChart;

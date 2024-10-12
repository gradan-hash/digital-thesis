
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./DashboardPage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardPage = () => {
  // Simulated data for views and downloads
  const mostViewedTheses = {
    labels: [
      "Quantum Computing",
      "AI in Healthcare",
      "Defense Systems",
      "Open Access",
      "Machine Learning",
    ],
    datasets: [
      {
        label: "Views",
        data: [1200, 950, 780, 650, 590],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  const mostDownloadedTheses = {
    labels: [
      "Quantum Computing",
      "AI in Healthcare",
      "Defense Systems",
      "Open Access",
      "Machine Learning",
    ],
    datasets: [
      {
        label: "Downloads",
        data: [400, 320, 270, 240, 190],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  };

  // Simulated data for thesis categories
  const thesisCategories = {
    labels: [
      "Computer Science",
      "Engineering",
      "Healthcare",
      "Education",
      "Others",
    ],
    datasets: [
      {
        label: "Category Distribution",
        data: [35, 25, 15, 10, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h1>Statistics Dashboard</h1>

      {/* Most Viewed Theses */}
      <div className="chart-container">
        <h2>Most Viewed Theses</h2>
        <Bar
          data={mostViewedTheses}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      {/* Most Downloaded Theses */}
      <div className="chart-container">
        <h2>Most Downloaded Theses</h2>
        <Bar
          data={mostDownloadedTheses}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      {/* Thesis Categories Distribution */}
      <div className="chart-container">
        <h2>Thesis Categories Distribution</h2>
        <Pie
          data={thesisCategories}
          options={{
            responsive: true,
            plugins: { legend: { position: "right" } },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardPage;

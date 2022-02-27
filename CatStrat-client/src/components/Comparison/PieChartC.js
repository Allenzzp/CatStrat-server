import '../Summary/Summary.scss';
import getPieChartData from '../../helpers/getPieChartData';

import { Doughnut, Pie } from "react-chartjs-2";
import { randomColor } from 'randomcolor'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function PieChart({ data }) {

  const { pieData, pieLabels, colors } = getPieChartData(data)

  const dataset = {
    labels: pieLabels,
    datasets: [
      {
        label: 'Data',
        backgroundColor: colors,
        hoverBackgroundColor: '#651e3e',
        data: pieData
      }
    ]
  }

  return (
      <div className="pie-comparison">
        <Pie
          width={450}
          height={450}
          data={dataset}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'top'
            },
            animation: {
              animateScale: true,
              animateRotate: true
            },
            datalabels: {
              display: true,
              color: "white",
            },
            layout: {
              padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }
            }
          }}
        />
      </div>
  );
}
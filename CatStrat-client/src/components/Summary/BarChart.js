import './Summary.scss';
import getBarChartData from '../../helpers/getBarChartData';

import { Bar } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function BarChart({ data }) {

    const { barData, barLabels, colors } = getBarChartData(data)

    
    const dataset = {
        labels: barLabels,
        datasets: [
            {
                backgroundColor: colors,
                hoverBackgroundColor: '#651e3e',
                data: barData,
            }
        ]
    }

    return (

        <div className="pie">
            <Bar
                width={450}
                height={400}
                data={dataset}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    datalabels: {
                        display: false,
                        color: "white",
                    },
                    plugins: {
                        legend: {
                          display: false
                        }
                      },
                    layout: {
                        padding: {
                            top: 0,
                            bottom: 0,
                            left: 25,
                            right: 25
                        }
                    }
                }}
            />
        </div>

    );
}

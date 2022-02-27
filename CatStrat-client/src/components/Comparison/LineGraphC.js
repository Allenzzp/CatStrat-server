import React from 'react';
import getLineGraphData from '../../helpers/getLineGraphData';
import { Divider, Paper } from '@material-ui/core';

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);


export default function LineGraph({ data }) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 30,
                bottom: 35,
                left: 35,
                right: 50
            }
        }
    };

    const { lineData, lineLabels } = getLineGraphData(data)

    const lineGraphData = {
        labels: lineLabels,
        datasets: [
            {
                label: 'Earnings',
                data: lineData,
                borderColor: '#303F9F',
                backgroundColor: '#303F9F',
                tension: 0.15
            },
        ],
    };



    return (
        <Paper elevation={3} className="line-graphC" style={{ borderRadius: '30px', marginLeft:'40px'}}>
            <h1 className="title"> Overview </h1>
            <Divider className="divider" style={{ height: '2px', color: 'black' }} />
            <div>
                <Line
                    options={options}
                    data={lineGraphData}
                    width={600}
                    height={460}
                />
            </div>
        </Paper>
    );
}

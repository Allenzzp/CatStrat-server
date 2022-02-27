import { format, parseISO } from 'date-fns';
// var parseISO = require('date-fns/parseISO');

export default function getPieChartData(data) {
    const pieData = [];
    const pieLabels = [];

    let formattedData = data.reduce((acc, curr) => {
        if (acc[curr.strategy_name]) {
            acc[curr.strategy_name] += 1;
        } else {
            acc[curr.strategy_name] = 1;
        }
        return acc;
    }, {})

    const arrData = Object.entries(formattedData);

    arrData.forEach(([strat, count]) => {
        pieLabels.push(strat);
        pieData.push(count);
    });
    // console.log('pieLabels', pieLabels)
    // console.log('pieData', pieData)

    const availableColors = ["#5680E9", "#82EEFD", "#FCAE1E", "#C96567", "#FAED25", "#6494ED", "#3944BC", "#E2252B", "#ff6e40", "F6EAD4", "A4A595", "B50472", "79CBB8", "16ACEA", "4203C9", "B99523", "1978A5", "141414"]
    const colors =[];
    for (let i = 0; i < pieLabels.length; i++) {
        colors.push(availableColors[i])
    }

    return { pieData, pieLabels, colors };
}



import { format, parseISO } from 'date-fns';
// var parseISO = require('date-fns/parseISO');

export default function getBarChartData(data) {
    const barData = [];
    const barLabels = [];

    let formattedData = data.reduce((acc, curr) => {
        if (acc[curr.strategy_name]) {
            acc[curr.strategy_name] += curr.profit;
        } else {
            acc[curr.strategy_name] = curr.profit;
        }
        return acc;
    }, {})

    const arrData = Object.entries(formattedData);

    arrData.forEach(([strat, profit]) => {
        barLabels.push(strat);
        barData.push(profit);
    });
    console.log('barLabels', barLabels)
    console.log('barData', barData)

    const availableColors = ["#5680E9", "#82EEFD", "#FCAE1E", "#C96567", "#FAED25", "#6494ED", "#3944BC", "#E2252B", "#ff6e40", "F6EAD4", "A4A595", "B50472", "79CBB8", "16ACEA", "4203C9", "B99523", "1978A5", "141414"]
    const colors =[];
    for (let i = 0; i < barLabels.length; i++) {
        colors.push(availableColors[i])

    }

    return { barData, barLabels, colors };
}



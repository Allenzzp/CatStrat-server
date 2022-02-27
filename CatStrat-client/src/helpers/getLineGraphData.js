import { format, parseISO } from 'date-fns';
// var parseISO = require('date-fns/parseISO');

export default function getLineGraphData(data) {

    // use date-fns to parse the record's day
    let arrDayProfit = data.map((record) => {
        const { day } = record
        const month = Number(format(parseISO(day), 'M')) - 1;
        const year = Number(format(parseISO(day), 'yyyy'));

        return { profit: record.profit, month, year };
    });

    // create an object that stores each year as an array of profits
    let formattedData = arrDayProfit.reduce((acc, curr) => {
        if (acc[curr.year] && acc[curr.year][curr.month]) {
            acc[curr.year][curr.month] += curr.profit;
        } else if (!acc[curr.year]) {
            acc[curr.year] = Array(12).fill(0);
            acc[curr.year][curr.month] = curr.profit;
        } else {
            acc[curr.year][curr.month] = curr.profit;
        }
        return acc;
    }, {})
    
    // store each month of the year in an array
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    // make the data cumulutive as we progress from month to month
    let lineLabels = [];
    let lineData = [];
    let cumulativeProfit = {};
    let acc = 0;
    for (const year in formattedData) {
        cumulativeProfit[year] = [];
        for (const month in formattedData[year]) {
            if (formattedData[year][month]) {
                cumulativeProfit[year][month] = formattedData[year][month] + acc;
                acc = cumulativeProfit[year][month];
            } else {
                cumulativeProfit[year][month] = acc;
            }
            lineData.push(acc.toFixed(2));
            lineLabels.push(`${months[month]} ${year}`);
        }
    }

    // check current month
    const currentDate = new Date();
    console.log('current date', currentDate);
    const formattedCurrentDate = `${format(currentDate, 'MMM')} ${format(currentDate, 'yyyy')}`;

    // find starting index and ending index for our arrays 
    const startIndex = lineData.findIndex((profit) => profit > 0)
    const endIndex = lineLabels.findIndex((month) => month === formattedCurrentDate) + 1;

    // slice arrays based on starting index and ending index
    lineData = lineData.slice(startIndex, endIndex);
    lineLabels = lineLabels.slice(startIndex, endIndex);
    console.log('lineData', lineData);
    console.log('lineLabels', lineLabels);

    return { lineData, lineLabels };
}



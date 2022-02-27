import axios from "axios";

export default function getMostGain(data) {

    let mostGain = 0;
    let formattedData = data.reduce((acc, curr) => {
        if (acc[curr.day]) {
            acc[curr.day] += curr.profit;
        } else {
            acc[curr.day] = curr.profit
        }

        if (mostGain < acc[curr.day]) {
            mostGain = acc[curr.day]
        }
        return acc;
    }, {})

    return mostGain;
}
export default function getAverageEarnings(data) {
   
    let average = 0;
    data.forEach((record) => {
        average += record.profit
    })
    average = average/data.length;
    return average.toFixed(2);

}
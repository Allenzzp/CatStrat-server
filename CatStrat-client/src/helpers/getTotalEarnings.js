export default function getTotalEarnings(data) {
   
    let total = 0;
    data.forEach((record) => {
        total += record.profit
    })
    return total.toFixed(0);

}
import Axios from 'axios';

export function transformCalendarData (records) {
  return records.map(record => {
    return {
      id: record.id,
      title: "$ " + record.profit.toString(),
      date: record.day.slice(0, 10)
    }
  })
}

export function sendGetReq(target, userID, setCalendarData) {
  //GET token from lcoalS request header 
  Axios.get(`/${target}`, {params: { userID }})        //, {headers})
    .then(res => {
      // console.log("recorconsods data", res.data);
      setCalendarData([...transformCalendarData(res.data)]);
    })
    .catch(err => console.log(err));
}

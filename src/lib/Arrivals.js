const main = 'https://calm-everglades-9373.herokuapp.com'
const url = main + '/arrivals?stop='

export default class Arrivals{
  constructor(stop){
    this.stop = stop;

    this.load();
  }

  load(){
    return `You have queried ${this.stop}`
  }

  getData(stop){
    return fetch(url + stop, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
      }
    })
    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(data.stopTimes.arrival[0])
    //   return data;
    // })
  }
 }

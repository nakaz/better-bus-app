const main = 'https://bus-api-server-tmp.herokuapp.com'
const url = main + '/arrivals/stop'

const ArrivalQuery = (stop) => {
  return fetch(`${url}/${stop}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
      }
  })
}

export default ArrivalQuery

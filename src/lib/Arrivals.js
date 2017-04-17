const main = 'https://calm-everglades-9373.herokuapp.com'
const url = main + '/arrivals?stop='

const ArrivalQuery = (stop) => {
  return fetch(`${url}${stop}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
      }
  })
}

export default ArrivalQuery

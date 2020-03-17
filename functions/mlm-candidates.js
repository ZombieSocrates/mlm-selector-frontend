const fetch = require('node-fetch')
// TODO: UPDATE WITH HEROKU STUFF
const endpoint = 'http://127.0.0.1:5000/getEligibleHosts'


exports.handler = async(event, context) => {
  const response = await fetch(endpoint)
  const data = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
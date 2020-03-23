const fetch = require('node-fetch')
// TODO: UPDATE WITH HEROKU STUFF
const endpoint = `https://ml-eminem.herokuapp.com/${process.env.VUE_APP_HOSTS_ENDPT}`


exports.handler = async(event, context) => {
  const response = await fetch(endpoint)
  const data = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
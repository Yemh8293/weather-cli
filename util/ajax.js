///ajax.js
const axios = require('axios')
module.exports = async (city) => {
  const results = await axios({
    method: 'get',
    url: 'https://tianqiapi.com/api',
    params:{
			appid: '34257562',
			appsecret: '3bD3y41O',
			version: 'v1',
      city
    }
  })
  return results.data
}

const axios = require('axios');

module.exports.getRandomCatUrl = async () => {
  return await axios.get('https://api.thecatapi.com/v1/images/search')
    .then(async function (response) {
      return response.data[0].url;
    })
    .catch(function (error) {
      console.log(error)
    });
}

module.exports.getRandomDogUrl = async () => {
  return await axios.get('https://dog.ceo/api/breeds/image/random')
    .then(async function (response) {
      return response.data.message
    })
    .catch(function (error) {
      console.log(error)
    });
}

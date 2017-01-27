const request = require('request');


const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/8a206d56afb7faf118d5c02c845292ad/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to get weather.');
    }
  });
};

module.exports.getWeather = getWeather;

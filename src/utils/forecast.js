const request = require('request')

const getForecast = (latitude, altitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=6bf79f3064ef15a933ad9c57da371ab7&query=37.8267,-122.4233&units=m'
    const url = 'http://api.weatherstack.com/current?access_key=6bf79f3064ef15a933ad9c57da371ab7&query=' + latitude + ',' + altitude + '&units=m'
    console.log('lat is ' +  latitude)
    console.log('alt is ' + altitude)
    request({ url, json: true }, (error, {body}) =>  {
        //console.log("It is currently " + response.body.current.temperature + " degrees and it feels like " + response.body.current.feelslike)
        if (error) {
            callback('There is a low lever error occured', undefined)
        }
        else if (body.success === false) {
            callback('Incorrect coordinates', undefined)
        }
        else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees and it feels like " + body.current.feelslike)
        }
    })
   
}

module.exports = getForecast
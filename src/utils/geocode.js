const request = require('request')

const geocode = (location, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Novi%20Sad.json?access_token=pk.eyJ1Ijoic3Rhbmtvdm1hcmtvIiwiYSI6ImNrZ2l4cWV0bzA0NHkyeG52dmc3OGFza3QifQ._BfPlmfioDV9Yxo0JqlDXQ'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ location + '.json?access_token=pk.eyJ1Ijoic3Rhbmtvdm1hcmtvIiwiYSI6ImNrZ2l4cWV0bzA0NHkyeG52dmc3OGFza3QifQ._BfPlmfioDV9Yxo0JqlDXQ'

    request({url, json: true}, (error, {body}) => {
       if (error) {
           callback('Low lever error', undefined)
       }
       else if (body.features.length === 0) {
           callback ('unknown location')   
       }
       else {
           callback(undefined, {
               latitude: body.features[0].center[1],
               altitude: body.features[0].center[0]
           })
       }
    })
}

module.exports = geocode;
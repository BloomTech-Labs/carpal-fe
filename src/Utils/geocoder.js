import axios from 'axios'

export default function geocode(location) {
    let long;
    let lat;
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        .then(response => {
            const match = response.data.features.filter(place => place.relevance > 0.9)
            console.log(match[0].center)
            long = match[0].center[1]
            lat = match[0].center[0]
            return [lat, long]
        })
        .catch(err => console.log(err))
}
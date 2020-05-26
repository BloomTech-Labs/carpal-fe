import axios from "axios";

export default function reverseGeocoder(location) {
    const lat = location.lat;
    const long = location.long;
    return axios
        .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
        )
        .then((response) => {
            return response.data.features[0]?.place_name;
        })
        .catch((err) => console.log(err));
}

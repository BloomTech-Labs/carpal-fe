import axios from "axios";

export default function() {
    if (process.NODE_ENV === "staging") {
        return axios.create({
            baseURL: "https://staging-carpal.herokuapp.com/"
        });
    } else if (process.NODE_ENV === "production") {
        return axios.create({
            baseURL: "https://carpal-production.herokuapp.com/"
        });
    }
}

export default function getGoogleRoute() {
    if (process.env.NODE_ENV === "development") {
        return "https://staging-carpal.herokuapp.com/auth/google/testing";
    } else if (process.env.NODE_ENV === "production") {
        return "https://carpal-production.herokuapp.com/auth/google";
    } else {
        return "https://staging-carpal.herokuapp.com/auth/google/staging";
    }
}   
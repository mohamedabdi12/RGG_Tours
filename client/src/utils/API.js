import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getTours: function (region) {
        return axios.get('/api/tours' + (region ? `?region=${region}` : ""));
    },
    authenticate: function (user) {
        return axios.post('/api/users', user);
    },
    currentUser: function () {
        return axios.get("/api/users/current");
    },
    signout: function (user) {
        return axios.post("/api/users/signout", user);
    },
    getBookings: function () {
        return axios.get("/api/bookings");
    },
    createBooking: function (tourId) {
        return axios.post("/api/bookings", { tourId });
    },
    deleteBooking: function (bookingId) {
        return axios.delete("/api/bookings/" + bookingId);
    }
};

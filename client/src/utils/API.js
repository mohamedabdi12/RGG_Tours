import axios from "axios";

// The getTours method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getTours: function (region) {
        return axios.get('/api/pastTours' + (region ? `?region=${region}` : ""));
    },
    getRegions: function (region) {
        return axios.get('/api/pastTours/regions');
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
        return axios.get("/api/tourBookings");
    },
    createBooking: function (bookingInfo) {
        return axios.post("/api/tourBookings", bookingInfo);
    },
    deleteBooking: function (bookingId) {
        return axios.delete("/api/tourBookings/" + bookingId);
    }
};

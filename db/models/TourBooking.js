const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourBookingSchema = new Schema({
    tour: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

const TourBooking = mongoose.model("TourBooking", tourBookingSchema);
module.exports = TourBooking;
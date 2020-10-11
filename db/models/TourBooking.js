const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourBookingSchema = new Schema({
    bookingName: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: Date,
        required: true
    },
    bookingRegion: {
        type: String,
        enum: mongoose.model("PastTours").regions.map(({ id }) => id),

    },
    bookingType: {
        type: String,
        enum: ['Winery', 'Brewery', 'Dispensary', "Combo", "Surprise Me"],

    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},
    {
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    });

const TourBooking = mongoose.model("TourBooking", tourBookingSchema);
module.exports = TourBooking;
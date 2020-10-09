const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regions = [
    {
        text: "NW Portland",
        id: "nw_portland"
    },
    {
        text: "SE Portland",
        id: "se_portland"
    },
    {
        text: "Central OR",
        id: "central_or"
    },
    {
        text: "Southern OR",
        id: "southern_or"
    }
]

const tourBookingSchema = new Schema({
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: Date,
        required: true
    },
    region: {
        type: String,
        enum: regions.map(({id}) => id),
        required: true
    },
    type: {
        type: String,
        enum: ['Winery', 'Brewery', 'Dispensary', "Combo", "Surprise Me"],
        required: true
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
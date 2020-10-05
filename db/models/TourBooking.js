const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourBookingSchema = new Schema({
    tourId: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
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
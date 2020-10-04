const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    auth: {
        type: {
            google: {
                id: {
                    type: String
                },
                token: {
                    type: String
                }
            }
        },
        select: false
    }
},
    { toJSON: { virtuals: true } }
);

userSchema.virtual("bookings", {
    ref: "TourBooking",
    localField: "_id",
    foreignField: "user",
    justOne: false
})

const User = mongoose.model("User", userSchema);
module.exports = User;

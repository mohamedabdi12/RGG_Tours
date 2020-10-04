const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  bgImg: {
    type: String
  },
  links: 
    [{text,href}]
});

const UserBookingSchema = new Schema({
  googleId: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  Tours: [TourSchema]
},
  { toJSON: { virtuals: true } }
);
const UserBooking = mongoose.model("UserBooking", UserBookingSchema);

module.exports = UserBooking;

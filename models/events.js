const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  description: {
    type: String,
    default: ""
  },
  // url for Event web page - unique index
  links: {
    type: String,
    default: "",
    unique: true
  },
  bgImg: []
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

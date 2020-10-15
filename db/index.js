const mongoose = require("mongoose");
const models = require("./models");

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/UserBooking",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
).catch(err => {
    console.error(err);
});

module.exports = models;
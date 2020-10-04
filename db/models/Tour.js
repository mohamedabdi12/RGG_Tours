const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSchema = new Schema({
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
    links: {
        type: [{
            text: {
                type: String
            }, href: {
                type: String
            }
        }],
        default: () => []
    }
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;

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

const linkSchema = new Schema({
    text: {
        type: String
    }, href: {
        type: String
    }
}, {
    _id: false
});

const tourSchema = new Schema({
    region: {
        type: String,
        enum: regions.map(({ id }) => id)
    },
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
        type: [linkSchema],
        default: () => []
    }
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

tourSchema.statics.regions = regions
tourSchema.statics.isValidRegion = function (region) {
    return regions.some(({ id }) => id === region);
}

const Tour = mongoose.model("PastTours", tourSchema);
module.exports = Tour;

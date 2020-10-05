const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regions = ["nw_portland", "se_portland", "central_or", "sothern_or"];

const tourSchema = new Schema({
    region: {
        type: String,
        enum: regions
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
        type: [{
            text: {
                type: String
            }, href: {
                type: String
            }
        }],
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

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: {
            givenName: {
                type: String,
                required: true,
            },
            familyName: {
                type: String,
                required: true,
            }
        },
        required: true
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
    {
        toJSON: {
            virtuals: true,
            versionKey: false,
            transform: (doc, ret) => {
                delete ret._id;
            }
        }
    }
);

userSchema.virtual("fullName").get(function () {
    return this.name.givenName + " " + this.name.familyName;
})

userSchema.virtual("bookings", {
    ref: "TourBooking",
    localField: "_id",
    foreignField: "userId",
    justOne: false
});

userSchema.methods.createAuthToken = function () {
    const payload = {
        id: this._id,
        email: this.email
    };
    const signConfig = {
        algorithm: 'HS256',
        expiresIn: '48h',
    };
    return jwt.sign(payload, process.env.AUTH_JWT_PRIVATE_KEY, signConfig);
}

const User = mongoose.model("User", userSchema);
module.exports = User;

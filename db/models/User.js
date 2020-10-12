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
    },// this id is the google id and the token we get from google. sing in with google, redirected to separate page, user confirms, then redirected back to our site with the google id and token. our front end sends it to our backend, then our back end sends it to google and google determines if its valid, then we create a new row in db, and we send them a jwt with their session info, ID, and email (payload) 
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

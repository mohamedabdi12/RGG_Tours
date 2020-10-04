const passport = require("passport");
const { Strategy: GoogleTokenStrategy } = require("passport-google-token");

const db = require("../db");

passport.use(new GoogleTokenStrategy({
    clientID: "205158470591-frud5g1h9dmquka6n1e3mhju7rglm33i.apps.googleusercontent.com",
    clientSecret: "20"
}, async (accessToken, refreshToken, profileData, done) => {
    console.log(accessToken, accessToken, profileData)
    try {
        const user = await db.User.findOne({ 'auth.google.id': profileData.id });
        if (!user) {
            return await db.User.create({
                name: profileData.name,
                email: profileData.emails[0].value,
                auth: {
                    google: {
                        id: profileData.id,
                        token: accessToken
                    }
                }
            });
        }
        console.log("Upsert Google User:", user);
        done(null, user);
    } catch (err) {
        console.log("Upsert Google User Err:", err);
        done(err);
    }
}))

module.exports = passport;
//store clientSecret as .env variable ; make sure not to d
const passport = require("passport");
const { Strategy: GoogleTokenStrategy } = require("passport-google-token");
const { Strategy: JwtStrategy } = require("passport-jwt");

const db = require("../db");
// Passport makes it easy to utilize many different authentication strategies. For log in.
passport.use(new GoogleTokenStrategy({
    clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
}, async (accessToken, refreshToken, profileData, done) => {
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
        done(null, user);
    } catch (err) {
        done(err);
    }
})); // http only cookie. Cannot be accessed through javascript on the client (on the server, but not on the client) which is why it's secure. Checking for session cookies as we define.
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: req => req.session.jwt,
            secretOrKey: process.env.AUTH_JWT_PRIVATE_KEY,
            algorithms: ['HS256'],
            ignoreExpiration: process.env.NODE_ENV !== 'production',
            passReqToCallback: true,
        },
        async (req, payload, done) => {
            try {
                const user = await db.User.findById(payload.id);
                if (!user) return done(null, false);
                done(null, user);
            } catch (err) {
                done(err);
            }
        },
    ),
);

module.exports = passport;
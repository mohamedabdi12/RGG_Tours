const router = require("express").Router();
const { passport } = require("../../middleware")
const db = require("../../db");


// Sends back user if they have a valid JWT in session cookies or NULL otherwise
router.get("/current",
  (req, res) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      return res.status(200).json(req.user || null);
    })
  }
);

router.post("/",
  passport.authenticate("google-token", { session: false }),
  (req, res) => {
    const { user } = req;
    console.log('we git up user authenticate with: ', user)
    if (!user) return res.status(401).json({});
    req.session.jwt = user.createAuthToken();
    res.status(200).json(user)
  }
);

router.post("/signout",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    req.session = null;
    res.status(200).end();
  })
module.exports = router;

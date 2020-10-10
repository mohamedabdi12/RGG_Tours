const router = require("express").Router();
const passport = require("../../middleware/passport")
const db = require("../../db");



router.get("/current",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).json(req.user);
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

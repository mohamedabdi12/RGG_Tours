const router = require("express").Router();
const passport = require("../middleware/passport")
const db = require("../db");

router.get("/bookings", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.user.create({
    title: { $regex: new RegExp(req.query.q, 'i') }
  })
    .then(bookings => res.json(bookings))
    .catch(err => res.status(422).end());
});
router.post("/users", passport.authenticate("google-token", { session: false }), (req, res) => {

  console.log("req.body is ", req.body, req.user)
  res.status(200).end()
}
)
module.exports = router;

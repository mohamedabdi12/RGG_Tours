const router = require("express").Router();
const db = require("../models");

router.get("/events", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.user.create({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(events => res.json(events))
    .catch(err => res.status(422).end());
});
router.post("/user",(req, res)=>{
  console.log("req.body is ",req.body)
  res.status(200).end()
}
)
module.exports = router;

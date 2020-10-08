const router = require("express").Router();
const passport = require("../../middleware/passport")
const db = require("../../db");



  router.get("/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { user } = req;
    const bookings = await db.TourBooking.find({ userId: user.id });
    res.status(200).json(bookings || []);
  }
);

// hit on  post for api/bookings

router.post("/",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    console.log('we hit bookings post route!');
    const { user, body } = req;
    console.log('body is: ', body)
    try {
      const booking = await db.TourBooking.create({ userId: user.id, ...body });
      res.status(201).json(booking);
    } catch (err) {
      console.log('error in booking post: ', err);
      res.status(500).end();
    }
  }
);
// hit on  get for api/bookings/:id
router.delete("/:bookingId",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { user } = req;
    const { bookingId } = req.params;
    const booking = await db.TourBooking.findById(bookingId);
    if (!booking) {
      return res.status(400).end();
    }
    if (!booking.userId.equals(user.id)) {
      return res.status(403).end();
    }
    const result = await db.TourBooking.deleteOne({ _id: bookingId });
    res.status(200).json({});
  });
// req.session is cookie-session
// req.user is set by passport

module.exports = router;

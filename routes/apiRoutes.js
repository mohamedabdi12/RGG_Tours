const router = require("express").Router();
const passport = require("../middleware/passport")
const db = require("../db");

router.get("/tours", async (req, res) => {
  const { region } = req.query;
  const query = {}
  if (db.Tour.regions.includes(region)) query.region = region;
  console.log(query);
  const tours = await db.Tour.find(query);
  res.status(200).json(tours || []);
});

router.get("/bookings",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { user } = req;
    const bookings = await db.TourBooking.find({ userId: user.id });
    res.status(200).json(bookings || []);
  }
);

router.post("/bookings",
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { user } = req;
    const { tourId } = req.body;
    try {
      const tour = await db.Tour.findById(tourId);
      if (!tour) {
        return res.status(400).end();
      }
      const booking = await db.TourBooking.create({ userId: user.id, tourId });
      res.status(201).json(booking);
    } catch (err) {
      res.status(500).end();
    }
  }
);

router.delete("/bookings/:bookingId",
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
router.get("/users/current",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.status(200).json(req.user);
  }
);

router.post("/users",
  passport.authenticate("google-token", { session: false }),
  (req, res) => {
    const { user } = req;
    if (!user) return res.status(401).json({});
    req.session.jwt = user.createAuthToken();
    res.status(200).json(user)
  }
);

router.post("/users/signout",
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    req.session = null;
    res.status(200).end();
  })
module.exports = router;

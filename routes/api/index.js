const router = require("express").Router();
const tourBookingsRoutes = require("./tourBookings");
const usersRoutes = require("./users");
const pastToursRoutes = require("./pastTours");



// Book routes
router.use("/tourBookings", tourBookingsRoutes);
router.use("/users", usersRoutes);
router.use('/pastTours', pastToursRoutes)


module.exports = router;

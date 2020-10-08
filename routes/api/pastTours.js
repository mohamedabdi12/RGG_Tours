const router = require("express").Router();
const db = require("../../db");


router.get("/", async (req, res) => {
  const { region } = req.query;
  const query = {}
  if (db.PastTours.isValidRegion(region)) query.region = region;
  console.log(query);
  const tours = await db.PastTours.find(query);
  res.status(200).json(tours || []);
});


router.get("/regions", async (req, res) => {
  res.status(200).json(db.PastTours.regions);
});

module.exports = router;

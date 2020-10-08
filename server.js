require("dotenv").config();

const express = require("express");
const path = require("path");

const cookieSession = require("cookie-session");

const passport = require("./middleware/passport")

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

require("./db");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  keys: ['jwt'],
  signed: true,
  httpOnly: true,
}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

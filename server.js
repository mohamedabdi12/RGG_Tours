require("dotenv").config();

const express = require("express");
const path = require("path");

const cookieSession = require("cookie-session");

const passport = require("./middleware/passport")

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

require("./db");

//nodemailer
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

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

var transport = {
  host: 'smtp.gmail.com', // SMTP host of email provider
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
}
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
if (error) {
  console.log("server.js line 55 error", error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/send', (req, res, next) => {
var name = req.body.name
var email = req.body.email
var message = req.body.message
var content = `name: ${name} \n email: ${email} \n message: ${message} `

var mail = {
  from: name,
  to: 'RGGTours@gmail.com',  //Email address to receive messages
  subject: 'Contact RGG Tours',
  text: content
}

transporter.sendMail(mail, (err, data) => {
  if (err) {
    res.json({
      status: 'fail'
    })
  } else {
    res.json({
     status: 'success'
    })
  }
})
})

const contact = express()
contact.use(cors())
contact.use(express.json())
contact.use('/', router)
contact.listen(3002)
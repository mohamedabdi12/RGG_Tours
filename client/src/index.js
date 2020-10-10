import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

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
  console.log(error);
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

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
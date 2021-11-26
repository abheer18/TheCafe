require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;   //edited this port
// const port = process.env.USER || 8080;
// const port = process.env.PASSWORD || 8080;
const user = process.env.USER;
const pass = process.env.PASS;

const nodemailer = require("nodemailer");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = require('./database/db');

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected")
})

app.post("/send", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: false,
    auth: {
      user: user,
      password: pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const SQL = `INSERT INTO feedback (NAME, EMAILID, SUBJECT, MESSAGE) SET ?`;

  const query = connection.query(SQL, req.body, (err, output) => {
    if (err) {
      throw err;
    } else {
      res.send("Query run successfully");
    }
  } )

  let mailOptions = {
    from: user,
    to: req.body.email,
    subject: req.body.subject,
    text: `name: ${req.body.name}
email: ${req.body.email}
message: ${req.body.message}
    `,
  };

  /*
  `name: ${req.body.name}
    email: ${req.body.email}
    message: ${req.body.message}
    `,
  */

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send(`message send ${JSON.stringify(req.body)}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

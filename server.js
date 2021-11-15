const express = require("express");
const app = express();
const port = process.env.PORT || 3000;   //edited this port

const user = "fitnessblog223@gmail.com";
const pass = "@everyonecanuse";

const nodemailer = require("nodemailer");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

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

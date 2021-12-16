require("dotenv").config(".env");
const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; //edited this port

const user = process.env.USER;
const pass = process.env.PASS;

const nodemailer = require("nodemailer");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = require("./database/db");

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});
app.get("/form", (req, res) => {
  res.status(200).sendFile('public/form.html', { root:__dirname
  })
})
app.post("/thank", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });
  var x = req.body;
  // console.log(req.body);
  const SQL =
    "INSERT INTO `feedback` SET `NAME`=?, `EMAILID`=?, `SUBJECT`=?, `MESSAGE`=? ";

  const query = connection.query(
    SQL,
    [x.NAME, x.EMAILID, x.SUBJECT, x.MESSAGE],
    (err, output) => {
      if (err) {
        // throw err;
        console.log(err.message);
      } else {
        // res.status(200).json({
        //   dbMessage: "Query Run successfully",
        // });
        res.status(200).sendFile('public/thank.html', { root:__dirname
})

        let mailOptions = {
          from: user,
          to: req.body.EMAILID,
          subject: req.body.SUBJECT,
          text: `name: ${req.body.NAME} 
          email: ${req.body.EMAILID} 
          message: ${req.body.MESSAGE}
          `,
        };

        /*
        `name: ${req.body.name}
          email: ${req.body.email}
          message: ${req.body.message}
          `,
        */

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            // res.status(200).json({
            //   emailMessage: `message send ${JSON.stringify(req.body)}`,
            // });
          }
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// NAME, EMAILID, SUBJECT ,MESSAGE

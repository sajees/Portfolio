import express from "express";
var bodyParser = require("body-parser"),
nodeMailer = require('nodemailer');
import ExperienceDataService from "./controllers/ExpDataService";
import EducationDataService from "./controllers/EduDataService";
import StaticDataService from "./controllers/StaticDataService";
var path = require("path");

const app = express(),
  port = 7878,
  expDataService = new ExperienceDataService(),
  EduDataService = new EducationDataService(),
  StatDataService = new StaticDataService();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

app.get("/api/experience", function(req, res) {
  const id = req.query.id;
  const filteredData = expDataService.getData(id);
  res.status(200).json(filteredData);
});

app.put("/api/experience/:id", function(req, res) {
  const id = req.params.id;
  const data = req.body;
  console.log(data.duration);
  expDataService.updateData(id, data).then(data => {
    res.status(200).json(data);
  });
});

app.delete("/api/experience/:id", function(req, res) {
  const id = req.params.id;
  const data = req.body;

  expDataService.deletedData(id).then(data => {
    res.status(200).json(data);
  });
});

app.post("/api/experience/", function(req, res) {
  const data = req.body;
  expDataService.addData(data).then(data => {
    res.status(200).json(data);
  });
});

app.get("/api/education", function(req, res) {
  const id = req.query.id;
  const filteredData = EduDataService.getData(id);
  res.status(200).json(filteredData);
});

app.put("/api/education/:id", function(req, res) {
  const id = req.params.id;
  const data = req.body;
  console.log(data.duration);
  EduDataService.updateData(id, data).then(data => {
    res.status(200).json(data);
  });
});

app.delete("/api/education/:id", function(req, res) {
  const id = req.params.id;
  const data = req.body;

  EduDataService.deletedData(id).then(data => {
    res.status(200).json(data);
  });
});

app.post("/api/education/", function(req, res) {
  const data = req.body;
  EduDataService.addData(data).then(data => {
    res.status(200).json(data);
  });
});

app.get("/api/static-data", function(req, res) {
  const staticData = StatDataService.getData();
  res.status(200).json(staticData);
});

app.post("/api/send-email/", function(req, res) {

    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sajeemailer@gmail.com',
          pass: 'sajee@87mailer'
        }
      });
      
      var mailOptions = {
          from: 'senders email',
        to: 'sajeemailer@gmail.com',
        subject: 'Feedback from '+ req.body.name,
        text: req.body.email,
        html: '('+ req.body.email +')' + '<br/>' + req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

// app.get('/api/experience:company', function (req, res) {
//     // res.send('year ' + req.params.description);
//     req.params.description;
//     res.get({ duration: '5555555555555' });
//     })

// app.get("/api/experience", function (req, res) {
//     var data = experiences.experienceData();
//     res.status(200).send(data);
// });

// // app.get("/api/experience:id", function (req, res) {
// //     var data = experiences.experienceData();
// //     res.status(200).send(data);
// // });

// app.get("/api/education", function (req, res) {
//     var data = educations.educationData();
//     res.status(200).send(data);
// });

app.listen(port, () => console.log("Listning port on port " + port));

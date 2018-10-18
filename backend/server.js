import express from 'express'
var bodyParser = require('body-parser');
import ExperienceDataService from './controllers/ExpDataService';
import EducationDataService from './controllers/EduDataService';
var path = require('path');

const   app = express(),
        port = 7878,
        expDataService = new ExperienceDataService(),
        EduDataService = new EducationDataService();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
    })

app.get("/api/experience", function (req, res) {       
        const id = req.query.id;
        const filteredData =  expDataService.getData(id);
        res.status(200).json(filteredData);
});

app.put("/api/experience/:id", function (req, res) {
        const id = req.params.id;
        const data = req.body;
        console.log(data.duration);
        expDataService.updateData(id, data).then(data => {
            res.status(200).json(data);
        });          
});

app.delete("/api/experience/:id", function (req, res) {
    const id = req.params.id;
    const data = req.body;
    
    expDataService.deletedData(id).then(data => {
        res.status(200).json(data);
    });          
});

app.post("/api/experience/", function (req, res) {
    const data = req.body; 
    expDataService.addData(data).then(data => {
        res.status(200).json(data);
    });          
});

app.get("/api/education", function (req, res) {       
        const id = req.query.id;
        const filteredData =  EduDataService.getData(id);
        res.status(200).json(filteredData);
});

app.put("/api/education/:id", function (req, res) {
        const id = req.params.id;
        const data = req.body;
        console.log(data.duration);
        EduDataService.updateData(id, data).then(data => {
            res.status(200).json(data);
        });          
});

app.delete("/api/education/:id", function (req, res) {
    const id = req.params.id;
    const data = req.body;
    
    EduDataService.deletedData(id).then(data => {
        res.status(200).json(data);
    });          
});

app.post("/api/education/", function (req, res) {
    const data = req.body; 
    EduDataService.addData(data).then(data => {
        res.status(200).json(data);
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

app.listen(port, ()=> 
    console.log('Listning port on port ' + port)
);

let data =  require("../public/education_data.json").data;
let fs = require('fs');
var path = require('path');


export default class EducationDataService {

    getData(id){
        const _data = id ? data.filter((item)=>{
            if(item.id == id){
                return item;
            }
        }) : data;
        return _data;
    }

    updateData(id, input){

        return new Promise((resolve, reject) => {

            let updatedObject = {}; 
            const _data = data.map((item)=>{
                if(item.id == id){
                    Object.keys(input).forEach(key => {
                        item[key] = input[key];
                    });    
                    updatedObject = item;            
                }
                return item;
            });
    
            fs.writeFile((path.join(__dirname, "../public/education_data.json")), JSON.stringify({
                data : _data
            }, null, 4), () => {
                resolve(updatedObject);
            });

        });       
        
    }

    deletedData(id){
        return new Promise((resolve, reject) => {
            let updatedObject = {};

            const _data = id ? data.filter((item, index)=>{
                if(item.id != id){
                    return item;
                }
            }) : data;

            fs.writeFile((path.join(__dirname, "../public/education_data.json")), JSON.stringify({
                data : _data
            }, null, 4), () => {
                resolve(updatedObject);
            });
        });
    }

    addData(input){
        return new Promise((resolve, reject) => {
            let updatedObject = {},
                newExperience;

            const currentLatestId = (data[data.length - 1]).id;

            newExperience = {
                "id": (currentLatestId+1),
                "digree": input.digree,
                "school": input.school,
                "year": input.year,
                "description": input.description,
            };

            data.push(newExperience);
            updatedObject = data;

            fs.writeFile((path.join(__dirname, "../public/education_data.json")), JSON.stringify({
                data
            }, null, 4), () => {
                resolve(updatedObject);
            });
        });
        
    }
    

}
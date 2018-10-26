let data =  require("../public/static_data.json").data;
let fs = require('fs');
var path = require('path');


export default class StaticDataService {
    getData(){
        const _data = data;
        return _data;
    }
}
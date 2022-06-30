
var data = require("./en_medical_dialog.json");
const fs = require('fs')

var newData =[];

data.forEach((element)=> {
  newData.push({ "index" : { "_index": "medical", "_id" : element.id } });
  newData.push(element);
})

fs.writeFileSync('./medical.json', JSON.stringify(newData));
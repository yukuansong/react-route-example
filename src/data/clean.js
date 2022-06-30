
var data = require("./en_medical_dialog.json");

var dataCleaned= data.filter(
  (arr, index, self) =>
    index ===
    self.findIndex((t) => t.Description === arr.Description));


const fs = require('fs')
fs.writeFileSync('./clean.json', JSON.stringify(dataCleaned));
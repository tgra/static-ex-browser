const fs = require('fs')

export default function handler(req, res) {

  let file = "../data/summary/persons_name_desc.json"
  
  let rawdata = fs.readFileSync(file);
  let persons = JSON.parse(rawdata);
  persons = persons.persons
     
  res.status(200).json({persons});
  
  }
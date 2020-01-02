//No 1: create calculator module
const calc = require("./calculator");
var a = 20;
var b = 10;

console.log("No 1: Calculator module::::");
console.log("\tAdd:", calc.add(a, b));
console.log(`\tSubract: ${calc.subract(a, b)}`);
console.log(`\tMultiply: ${calc.multiply(a, b)}`);
console.log(`\tDivide: ${calc.divide(a, b)}`);


//no 2 : read data from a file
console.log("No 2 : Read data from a file:::: ");
var fs = require("fs");
fs.readFile("./example2.txt", (err, content) => {
  if (err) {
    console.log(err);
  } else
    console.log("\tcontent in the file example2.txt is :", content.toString());
});


//no 3: read data from a file and write it in another file.
console.log("no 3: read data from a file and write it in another file.");
var data;
fs.readFile("./example3read.txt", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    data = content.toString();
    console.log("\t the Content in example2read file :", data);
    fs.writeFile("example3write.txt", data, err => {
      if (err) console.log(err);
      console.log("\tSuccessfully Written to File example2write.");
    });
  }
});


//No: 4  Read an Html file  and write it in browser:

const http = require('http');
const server = http.createServer((req,res)=>{
 if(req.url === '/'){
  fs.readFile("./example4.html", (err, content) => {
   if (err) {
     console.log(err);
   } else{
    console.log(content.toString());
    res.write(content.toString());
    res.end();
   }
  });
 }
});
server.listen(3000);
console.log("listening to port 3000... For example 4 goto localhost:3000 in browser...")

//No 5: read a Json object and display it on browser
 var obj = {"Name": "Thilaga", "Age" : 25 , "dept": "CDB"}

const server2 = http.createServer((req,res)=>{
 if(req.url === '/'){
    res.write(JSON.stringify(obj));
    res.end();
 }
});
server2.listen(3001);
console.log("listening to port 3001... For example 5 goto localhost:3001 in browser...")
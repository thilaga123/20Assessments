var MongoClient = require('mongodb').MongoClient;
var mysql = require('mysql');
MongoClient.connect('mongodb://127.0.0.1:27017',function(err ,db){
if(err){
throw err;
}else{
console.log("database created");
}
db.close();
});

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 var myobj = [
   { name: 'John', address: 'Highway 71'},
   { name: 'Peter', address: 'Lowstreet 4'},
   { name: 'Amy', address: 'Apple st 652'},
   { name: 'Hannah', address: 'Mountain 21'},
   { name: 'Michael', address: 'Valley 345'},
   { name: 'Sandy', address: 'Ocean blvd 2'},
   { name: 'Betty', address: 'Green Grass 1'},
   { name: 'Richard', address: 'Sky st 331'},
   { name: 'Susan', address: 'One way 98'},
   { name: 'Vicky', address: 'Yellow Garden 2'},
   { name: 'Ben', address: 'Park Lane 38'},
   { name: 'William', address: 'Central st 954'},
   { name: 'Chuck', address: 'Main Road 989'},
   { name: 'Viola', address: 'Sideway 1633'}
 ];
 dbo.collection("customers").insertMany(myobj, function(err, res) {
   if (err) throw err;
   console.log("Number of documents inserted: " + res.insertedCount);
   db.close();
 });
});

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 dbo.collection("customers").find({}).toArray(function(err, result) {
   if (err) throw err;
   console.log(result);
   db.close();
 });
});


var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "root",
 database:'mydb'
});

con.connect(function(err) {
 if (err) throw err;
 console.log("Connected SQL!");
 //created already ....
//  con.query("CREATE DATABASE mydb", function (err, result) {
//   if (err) throw err;
//   console.log("SQL Database created");
// });

var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

con.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
});

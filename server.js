var express = require("express");
var app = express();
var http = require("http").Server(app);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/www"));
app.use(bodyParser.json());

// starts server listening
let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("my first server");
  console.log("server listening on: " + host + " port: " + port);
});

// sets initial page as log in page
app.get("/", function (req, res) {
  res.sendFile(__dirname, "/www/index.html");
});

// route to account page
app.get("/account", function (req, res) {
  res.sendFile(__dirname, "/www/account.html");
});

// api for checking log in credentials
app.post("/api/login", function (req, res) {
  //list of user credentials
  let users = [
    { email: "test@abc.com", password: "123" },
    { email: "abc@abc.com", password: "123" },
    { email: "marty", password: "test" },
  ];
  if (!req.body) {
    return res.sendStatus(400);
  }

  let customer = {};
  customer.email = req.body.email;
  customer.password = req.body.password;
  customer.valid = false;
  for (let i = 0; i < users.length; i++) {
    if (
      req.body.email == users[i].email &&
      req.body.password == users[i].password
    ) {
      customer.valid = true;
    }
    console.log(customer);
  }
  res.send(customer);
});

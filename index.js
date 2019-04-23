const express = require("express");    // this is all you need for a server

const app = express();    // variable run as a function

let http = require("http").Server(app);  //class with a Server Method that accepts express server as variable intake

app.use("/", express.static("./client") ); // this is in reference to the html?

// app.use("/secretfolder", express.static("private/") );   // setting up different static directory roots -  routing to different folder

let port =3000;

http.listen(port);                 // for http requests or any port that is open

console.log(`Express server is now running on port  ${port} `);


/*
let myVariable = function() {
  console.log("hello world")
}

myVariable();
*/

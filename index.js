const express = require("express");    // this is all you need for a server
const app = express();    // variable run as a function
const bodyParser = require("body-parser");

let http = require("http").Server(app);  //class with a Server Method that accepts express server as variable intake

app.use("/", express.static("./client") ); // this is in reference to the html?
// app.use("/secretfolder", express.static("private/") );   // setting up different static directory roots -  routing to different folder
// following two lines are for body parser to understand objects thru post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const port =3000;

http.listen(port);                 // for http requests or any port that is open

console.log(`Express server is now running on port  ${port} `);
//handling a post request  eg run below made from post button
app.post("/",(request,response)=>{
  let dataRecieved = request.body;

  console.log("someone made a request");
  console.log(`the request sent the following to us ` ,dataRecieved );
  // cannot do string concatenation
    response.send(" hi i received your message");
});
/*
let myVariable = function() {
  console.log("hello world")
}

myVariable();
*/

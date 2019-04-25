const express = require("express");    // this is all you need for a server
const app = express();    // variable run as a function
const bodyParser = require("body-parser");
const fs = require("fs");

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
  let dataToSend = { message: "hi , i recieved your message"}; // sent back object response to jquery

  console.log("someone made a request");
  console.log(`the request sent the following to us: ` , dataRecieved.data);
  // cannot do string concatenation
//     response.sendStatus(503); //service unavailable
    response.send(dataToSend);
});



app.post("/numberSaver", (request,response) => {
  let clientNumber = request.body.userNumber;
  console.log(clientNumber);

  let numberArray =[];
//    numberArray.push(clientNumber);



  if (fs.existsSync("numbers.json") == false) {


    let default1 = {currentNumbers: []};
      default1 = JSON.stringify(default1);

    fs.writeFileSync("numbers.json", default1,"utf8");
  }


// read numbers.json File
        let json = fs.readFileSync("numbers.json","utf8");
        let jsonObject = JSON.parse(json);  // parse make into object

//        let objectToSave = {currentNumbers: numberArray};
    console.log(jsonObject);

      numberArray = jsonObject.currentNumbers;

      numberArray.push(clientNumber);

      let objectToSave = {currentNumbers: numberArray};

  //    let objectToSave = {currentNumbers: []}
        let jsonToSave = JSON.stringify(objectToSave);  // save to json


// writing to a file on the server
      let contents = clientNumber;
  //fs.writeFileSync('numbers.txt','utf8') =   clientNumber ;
// let dataToWrite = contents + "\n  was just added to the previous text";
      let dataToWrite = jsonToSave;
       fs.writeFileSync("numbers.json", dataToWrite, "utf8");
//       fs.ReadFileSync("numbers.json", dataToWrite, "utf8");

//      fs.writeFileSync("numbers.txt", clientdataToWrite, "utf8"); // this overwrites data
//      fs.appendFileSync("numbers.txt", clientdataToWrite, "utf8"); // appends to existing file

      response.sendStatus(200);  // send status number 200 success code to browser


    //  console.log('the number has been successfully saved');
    //  console.log(numbers.json);



});  // name of root and handling post request
/*
let myVariable = function() {
  console.log("hello world")
}

myVariable();
*/

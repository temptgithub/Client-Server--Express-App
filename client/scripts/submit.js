"use strict";
console.log("File Detected");
// below are jquery
$(document).ready(function() {
console.log( "jquery is loaded after document ready from index.html");

    $("#save").click(()=> {
      console.log("something");

      let value = $("#number").val();


      let dataToSendToServer = {"userNumber": value};
        //$.post("location","data",callback function)
        //$.post("http://localhost:3000,"retrieveList","hello server",function(){
        //  console.log("the server  has responded")   // below using es6 notation
        //making a post request
          $.post("http://localhost:3000/numberSaver",dataToSendToServer, (data) => {
            console.log("the number was sent to the server");
            //console.log("the server sent the following:", data);

          });

    });


});  // jquery sending a string to the Server


console.log("script finished");

"use strict";
console.log("File Detected");
// below are jquery
$(document).ready(function() {
console.log( "jquery is loaded after document ready from index.html");

    $("#request-button").click(()=> {
        //$.post("location","data",callback function)
        //$.post("http://localhost:3000,"retrieveList","hello server",function(){
        //  console.log("the server  has responded")   // below using es6 notation
        //making a post request
          $.post("http://localhost:3000",{"data": "hello server"}, () => {
            console.log("the server  has responded");

          });

    });

});  // jquery sending a string to the Server


console.log("script finished");

"use strict";
console.log("File Detected");

$(document).ready(function() {
console.log( "jquery is loaded after document ready from index.html");
});

$.post("http://localhost:3000,retrieveList","sent string hello server",function(){
  console.log("the server  has responded")
});

console.log("script finished");

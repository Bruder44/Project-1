$(document).ready(function() {
var config = {
     apiKey: "AIzaSyD7QxcGxRT5b7HqxTzllDDK_bMt3LWVqCQ",
     authDomain: "ecofinder-1522697591597.firebaseapp.com",
     databaseURL: "https://ecofinder-1522697591597.firebaseio.com",
     projectId: "ecofinder-1522697591597",
     storageBucket: "ecofinder-1522697591597.appspot.com",
    messagingSenderId: "728861998432"
   };
   
   firebase.initializeApp(config);
  
  
 
  $("#monthly").on("click", function(event) {
    event.preventDefault();
    
    var database = firebase.database();
   
    var userinput = $("#email").val().trim(); 

    var newuser = {email:userinput
    }; 
    
    database.ref().push(newuser);
    
    console.log(newuser);

    alert("email added!");

    $("#email").val(" ");

    var queryURL = "https://newsapi.org/v2/top-headlines?q=recycling&apiKey=93310ac992ea4b76a7721436c947190e";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) 
    {console.log(response);
      $("#links").text(response)
  })})});
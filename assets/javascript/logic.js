var config = {
    apiKey: "AIzaSyD7QxcGxRT5b7HqxTzllDDK_bMt3LWVqCQ",
    authDomain: "ecofinder-1522697591597.firebaseapp.com",
    databaseURL: "https://ecofinder-1522697591597.firebaseio.com",
    projectId: "ecofinder-1522697591597",
    storageBucket: "ecofinder-1522697591597.appspot.com",
    messagingSenderId: "728861998432"
  };
  firebase.initializeApp(config);

  var ref = firebase.database().ref();
  var userinput = firbase.database().ref("pac-input");
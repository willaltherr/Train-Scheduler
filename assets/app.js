// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyBmIAtoYfOPXXZ8uAdUE5zjaMSq5Z_MpOA",
  authDomain: "fir-eba9f.firebaseapp.com",
  databaseURL: "https://fir-eba9f.firebaseio.com",
  projectId: "fir-eba9f",
  storageBucket: "fir-eba9f.appspot.com",
  messagingSenderId: "916143939246",
  appId: "1:916143939246:web:77d3d23b0c06ed1ae7173f"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Trains

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

// Grabs user input

var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainStart = moment($("#start-input").val().trim()).format('LT');
var trainFrequency = $("#frequency-input").val().trim();

// Creates local "temporary" object for holding train data

var newTrain = {
  name: trainName,
  destination: trainDestination,
  start: trainStart,
  frequency: trainFrequency
};

// Uploads train data to the database
database.ref().push(newTrain);

// Logs everything to console
console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.start);
console.log(newTrain.frequency);

alert("Train successfully added");

// Clears all of the text-boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#start-input").val("");
$("#frequency-input").val("");
});

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

// Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

// Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);
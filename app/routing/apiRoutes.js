// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var path = require('path');
var friend = require("../data/friends");

//Add up the differences to calculate the totalDifference
var totalDifference = 0;

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

 app.get("/api/friends", function(req, res) {
     res.json(friend)
     console.log(friend)
 });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

//==============================
//POST WITH LOOP - sample from class TA
    // //var difference  = function(obj1, obj2) {
    //     var sum = 0;
    //     for(var i =0; i<obj1.scores.length; i++){
    //         sum += Math.abs(obj1.scores[i] - obj2.scores[i])''
    //     }
    //     return sum; 
    // }
//==============================

 app.post('/api/friends', function(req, res) {
var friendSubmittal = req.body;

//pushes to array
friend.push(friendSubmittal);
    //object 2 friend user array who submitted survey
    var surveyDude = friend.length-1;
    //Total difference variable
    var totalDifference = 0;
    //Lowest score match
    var lowestScore = 1000;
    var friendMatching;
    //For loop that goes through each friend, second loop through each score
    for (var i = 0; i < friend.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        //Difference in score
        var diff = friend[i].scores[j] - friend[surveyDude].scores[j];
        //Getting the absolute value of the difference
        diff = Math.abs(diff);
        //Calculating the total difference for all numbers
        totalDifference = totalDifference + diff;
      }
      //Checking to see which one has the lowest score
      if(totalDifference < lowestScore){
        lowestScore = totalDifference;
        //assigning the friendMatching the value
        friendMatching = friend[i];
      }
      totalDifference = 0;
    }
    //Response in JSON format
    res.json(friendMatching);

    var lowestScore = 1000;

 });

}

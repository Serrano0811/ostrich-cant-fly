// Global variables
// to know the state of setInterval method
var interVal;
// worker script file name
var workerFileName = 'workerScript.js';

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  
  $('#demo').text(hours + ':' + mins + ':' + secs);
}

function startClock() {
  interVal = setInterval(printTime, 1000);
}

function stopClock() {
  clearInterval(interVal);
  $('#demo').text('');
}

// wait for the document to be loaded
$(function () {
  // create the worker
  // Remember, the script executes immediately
  var worker = new Worker(workerFileName);
  
  // Create event handler for onmessage
  // Event raised when worker sends message to page
  worker.onmessage = function (e) {
    // retrieve data in this example it's an object
    var data = e.data;
    
    // create variable for result
    var result = null;
    
    // Object has a state property
    if (data.state === "STARTED") {
      // Start the clock
      startClock();
      
      // Send message state to the #demo element
      $('#pre-demo').text('"STARTED!"');
      
      // Started state
      result = "Worker started!";
    } else if (data.state === "STOPPED") {
      // stop the clock
      stopClock();
      
      // Send message state to the #demo element
      $('#pre-demo').text('"STOPPED!"');
      
      // Stopped state
      result = "Worker stopped!";
      
      // Stop worker
      worker.terminate();
      worker = undefined;
    } else if (data.state === "RESTARTED") {
      // Re-create the worker object again, since it was terminated.
      worker = new Worker('./' + workerFileName);
      
      // Start the clock again.
      startClock();
      
      // Send message state to the #demo element
      $('#pre-demo').text('"RESTARTED!"');
      
      // Stopped state
      result = "Worker restarted!";
    } else {
      // Object has processedName property
      result = data.processedName;
      $('#post-demo').text('"' + data.processedName + '"');
    }
    
    // Add new list item
    $('#result-list').append('<li>' + result + ' - Processed!</li>');
  };
  
  // Create event handler for click on button
  $('#send-message').click(function () {
    // Retrieve name from textbox
    var name = $('#name').val();
    
    // Create an object to send using JSON
    // Remember, JSON uses key/value pairs
    var message = { name: name };
    worker.postMessage(message);
  });
  
  $('#stop-worker').click(function () {
    worker.postMessage({ name: "abc123" });
  });
  
  $('#start-worker').click(function () {
    worker.postMessage({ name: "abc123defxyz" });
  });
  
  $('#restart-worker').click(function () {
    worker.postMessage({ name: "adsfsgse4df32srf34fg" });
  });
});
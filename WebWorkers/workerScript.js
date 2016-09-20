// Receive messages from the worker
self.onmessage = function (e) {
  // Variable data
  var data = e.data;
  
  // Create result object
  var result = null;
  
  // Object has a state property
  if (data.name === "abc123defxyz") {
    // Begin process
    // Simple example: Send started state
    result = { state: "STARTED" };
  } else if (data.name === "abc123") {
    // End process
    // Simple example: Send stopped state
    result = { state: "STOPPED" };
  } else if (data.name === "adsfsgse4df32srf34fg") {
    result = { state: "RESTARTED" };
  } else {
    var processedName = data.name;
    result = { processedName: processedName };
  }
  
  self.postMessage(result);
};
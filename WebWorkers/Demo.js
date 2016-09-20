// Receive messages from the worker
self.onmessage = function (e) { // e: events
  // The message is on the data property
  var messageObject = e.data;
  var message = messageObject.message; // This line can be commented if the message send here is a string.
  self.postMessage(message + " PROCESSED!!");
};
Deferred jQuery

Deferred is all about running long operations.

You can create your own long running operations and allow other developers to register event handlers.

Deferred object is used to manage long running operations and raises events on completion, failure, etc.

The basic pattern is:

1. Create a deferred object.
    var deferred = $.Deferred();

2. Start your async operation.

3. Return a promise.
    return deferred.promise();

4. Know the result:
    4.1 Call resolve for success: deferred.resolve();
    4.2 Call refect for failure: deferred.reject();
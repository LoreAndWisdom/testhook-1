// A simple hello world microservice
// Click "Deploy Service" to deploy this code
// Service will respond to HTTP requests with a string
module['exports'] = function helloWorld (hook) {
  // hook.req is a Node.js http.IncomingMessage
  var host = hook.req.host;
  var data = hook.req.params;
  console.log(data);
  // hook.res is a Node.js httpServer.ServerResponse
  // Respond to the request with a simple string
  hook.res.json(hook.params);
};


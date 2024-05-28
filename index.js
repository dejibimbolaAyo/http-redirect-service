let port = process.env.PORT || 5001;
let redirectUrl = process.env.REDIRECT_URL || "http://example.com";
let redirectStatusCode = process.env.REDIRECT_STATUS_CODE || 301;
let keepRequestPath = process.env.REDIRECT_KEEP_REQUEST_PATH || false;

let app = require("./server")({
  redirectUrl: redirectUrl,
  redirectStatusCode: redirectStatusCode,
  keepRequestPath: keepRequestPath,
});

app.listen(port);

console.log("Server running on port " + port);

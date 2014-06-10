var http = require("http");

function start() {
	function onRequest (request, response) {
		console.log("Request recieved.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}

	http.createServer(onRequest).listen(process.env.OPENSHIFT_NODEJS_PORT || 8080  );
	console.log("Server has started.");
}

exports.start = start;
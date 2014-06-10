var http = require("http");

function start() {
	function onRequest (request, response) {
		console.log("Request recieved.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}
	var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
	var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
	http.createServer(onRequest).listen(port,ip);
	console.log("Server has started.");
}

exports.start = start;
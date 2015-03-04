var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require9'socket.io').listen(server);

server.listen(3000);


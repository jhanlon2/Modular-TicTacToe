//Import the express library
var express = require('express')
//Create a server instance
var server = express()
//Configure the server
server.use(express.static(__dirname))
server.listen(8008)

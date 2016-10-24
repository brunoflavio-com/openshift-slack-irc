#!/bin/env node
var slackIRC = require('slack-irc');
var config = require(process.env.OPENSHIFT_DATA_DIR + '/config.json');
slackIRC(config);

var express = require('express');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var listener = express.listen(server_port, server_ip_address, function(){
        console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

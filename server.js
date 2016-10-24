#!/bin/env node
var slackIRC = require('slack-irc');
var config = require(process.env.OPENSHIFT_DATA_DIR + '/config.json');
slackIRC(config);

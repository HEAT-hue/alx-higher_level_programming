#!/usr/bin/node
const process = require('process');
if (process.argv[2]) {
	if (process.argv[3]) {
		console.log('Arguments found');
	}
	else {
  		console.log('Argument found');
	}
} else {
  console.log('No argument');
}

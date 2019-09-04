'use strict';

const events = require('./lib/events');
const readFile = require('./lib/read');
const switcharoo = require('./lib/switcharoo');
const writeFile = require('./lib/write');
require('./lib/logger');

// event handlers here - on event, handler: read, switcharoo, write
events.on('read', readFile);
events.on('switcharoo', switcharoo);
events.on('write', writeFile);

let file = process.argv.slice(2).shift();
events.emit( 'read', file );

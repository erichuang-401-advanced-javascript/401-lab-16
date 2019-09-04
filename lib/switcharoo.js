'use strict';

const events = require('./events');
require('./logger');

function switcharoo ( file, data ) {
  let unBuffered = data.toString().toUpperCase();
  let edit = Buffer.from( unBuffered );
  events.emit('log-swapped', `Switcharoo: ${file}`);
  events.emit('write', file, edit );
}

module.exports = switcharoo;

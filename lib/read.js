'use strict';

const fse = require('fs-extra');
const events = require('./events');
require('./logger');

function readFile ( file ) {
  return fse.readFile( file )
    .then ( data => {
      events.emit('log-read', `Read: ${file}`);
      events.emit('switcharoo', file, data );
    })
}

module.exports = readFile;

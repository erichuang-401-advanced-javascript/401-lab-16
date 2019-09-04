'use strict';

const events = require('./events');
const fse = require('fs-extra');
require('./logger');

function writeFile ( file, edit ) {
  return fse.writeFile( file, edit )
    .then( () => {
      events.emit('log-written', `Saved: ${file}`);
    })
}

module.exports = writeFile;

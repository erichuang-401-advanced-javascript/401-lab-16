'use strict';

const events = require('./events');

events.on('log-read', logger);
events.on('log-swapped', logger);
events.on('log-written', logger);

function logger ( log ) {
  console.log( new Date( Date.now() ), log );
}

module.exports = logger;

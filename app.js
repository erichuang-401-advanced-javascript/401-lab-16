'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = {
  start : ( port ) => {
    app.listen( port, () => {
      console.log('BATTLECRUISER OPERATIONAL o7');
    })
  }
};

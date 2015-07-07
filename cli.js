#!/usr/bin/env node
'use strict';
var meow = require('meow');
var stdin = require('get-stdin');

meow({
  help: [
    'Usage',
    '  $ strlen [input]',
    '',
    'Examples',
    '  $ strlen abcdefghijklmnopqrstuvwxyz',
    '  26',
    '',
    '  $ cat test.txt | strlen',
    '  31',
    '',
    "  $ echo 'a line of text' | strlen",
    '  14',
    ''
  ]
});

if (process.argv.length >= 3) {
  console.log(process.argv[2].toString().length);
} else {
  stdin(function (data) {
    data.length > 0 ?
    console.log(data.length - 1) :
    console.log('You must enter a `string`');
  });
}

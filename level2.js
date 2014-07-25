'use strict';

var uniq = require('uniq');

var line = prompt('Enter some values'),
    strings = line.split(',');

console.log(uniq(strings));

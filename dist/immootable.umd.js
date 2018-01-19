(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var append = require('./append');
var apply = require('./apply');
var combine = require('./combine');
var curry = require('./curry');
var defaultTo = require('./default-to');
var filter = require('./filter');
var find = require('./find');
var get = require('./get');
var has = require('./has');
var insert = require('./insert');
var keyPath = require('./key-path');
var log = require('./log');
var map = require('./map');
var omit = require('./omit');
var passBy = require('./pass-by');
var pipe = require('./pipe');
var prepend = require('./prepend');
var reverse = require('./reverse');
var set = require('./set');
var update = require('./update');

module.exports = {
  append: append,
  apply: apply,
  combine: combine,
  curry: curry,
  filter: filter,
  find: find,
  defaultTo: defaultTo,
  get: get,
  has: has,
  insert: insert,
  keyPath: keyPath,
  log: log,
  map: map,
  omit: omit,
  passBy: passBy,
  prepend: prepend,
  pipe: pipe,
  reverse: reverse,
  set: set,
  update: update
};

})));

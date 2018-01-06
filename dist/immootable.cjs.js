'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var curried = function curried(callback, args, arity) {
  return arity === 0 ? callback.apply(undefined, args) : function () {
    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    return curried(callback, [].concat(_toConsumableArray(args), newArgs), arity - newArgs.length);
  };
};

var curry = function curry(callback) {
  return curried(callback, [], callback.length);
};

var append = function append(value, list) {
  return list.concat(value);
};

var append$1 = curry(append);

var apply = function apply(callback, args) {
  return callback.apply(undefined, args);
};

var apply$1 = curry(apply);

var pipe = function pipe() {
  for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function (x) {
    return callbacks.reduce(function (value, cb) {
      return cb(value);
    }, x);
  };
};

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reverse = function reverse(list) {
  return [].concat(_toConsumableArray$1(list)).reverse();
};

var _combine = pipe(reverse, apply$1(pipe));

var combine = function combine() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _combine(args);
};

var defaultTo = function defaultTo(defValue, source) {
  return source || defValue;
};

var defaultTo$1 = curry(defaultTo);

var filter = function filter(callback, list) {
  return list.filter(callback);
};

var filter$1 = curry(filter);

var find = function find(callback, list) {
  return list.find(callback);
};

var find$1 = curry(find);

var has = function has(key, source) {
  return !!(source && source[key] !== undefined);
};

var has$1 = curry(has);

var keyPath = function keyPath(source) {
  return Array.isArray(source) ? source : [source];
};

var get = function get(key, source) {
  return keyPath(key).reduce(function (value, key) {
    return has$1(key, value) ? value[key] : undefined;
  }, source);
};

var get$1 = curry(get);

function _toConsumableArray$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var insert = function insert(index, value, list) {
  return [].concat(_toConsumableArray$2(list.slice(0, index)), [value], _toConsumableArray$2(list.slice(index, list.length)));
};

var insert$1 = curry(insert);

var log = function log(parser, x) {
  console.log(parser ? parser(x) : x);
  return x;
};

var log$1 = curry(log);

var map = function map(callback, list) {
  return list.map(callback);
};

var map$1 = curry(map);

var omitList = function omitList(k, s) {
  return s.filter(function (_, i) {
    return k.indexOf(i) < 0;
  });
};

var omitObject = function omitObject(keys, s) {
  return keys.reduce(function (o, k) {
    delete o[k];
    return o;
  }, Object.assign({}, s));
};

var omit = function omit(keys, source) {
  return Array.isArray(source) ? omitList(keyPath(keys), source) : omitObject(keyPath(keys), source);
};

var omit$1 = curry(omit);

var passBy = function passBy(by, pass) {
  by(pass);
  return pass;
};

var passBy$1 = curry(passBy);

var prepend = function prepend(value, list) {
  return [value].concat(list);
};

var prepend$1 = curry(prepend);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _set = function _set(key, value, source) {
  return Array.isArray(source) ? source.map(function (v, i) {
    return i === key ? value : v;
  }) : _extends({}, source, _defineProperty({}, key, value));
};

var set = function set(key, value, source) {
  var keys = keyPath(key);

  var _keys = _toArray(keys),
      nextKey = _keys[0],
      rest = _keys.slice(1);

  var nextValue = rest.length === 0 ? value : set(rest, value, get$1(nextKey, source));
  return _set(nextKey, nextValue, source);
};

var set$1 = curry(set);

function _toArray$1(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var update = function update(key, callback, source) {
  var keys = keyPath(key);

  var _keys = _toArray$1(keys),
      nextKey = _keys[0],
      rest = _keys.slice(1);

  var value = rest.length ? update(rest, callback, source[nextKey]) : callback(source[nextKey]);
  return set$1(nextKey, value, source);
};

var update$1 = curry(update);

exports.append = append$1;
exports.apply = apply$1;
exports.combine = combine;
exports.curry = curry;
exports.filter = filter$1;
exports.find = find$1;
exports.defaultTo = defaultTo$1;
exports.get = get$1;
exports.has = has$1;
exports.insert = insert$1;
exports.keyPath = keyPath;
exports.log = log$1;
exports.map = map$1;
exports.omit = omit$1;
exports.passBy = passBy$1;
exports.prepend = prepend$1;
exports.pipe = pipe;
exports.reverse = reverse;
exports.set = set$1;
exports.update = update$1;

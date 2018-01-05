'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var curried = function (callback, args, arity) { return arity === 0
  ? callback.apply(undefined, args)
  : function () {
      var newArgs = [], len = arguments.length;
      while ( len-- ) newArgs[ len ] = arguments[ len ];

      return curried(callback, args.concat( newArgs), arity - newArgs.length);
 }  };

var curry = function (callback) { return curried(callback, [], callback.length); };

var apply = function (callback, args) { return callback.apply(undefined, args); };

var apply$1 = curry(apply)

var pipe = function () {
  var callbacks = [], len = arguments.length;
  while ( len-- ) callbacks[ len ] = arguments[ len ];

  return function (x) { return callbacks.reduce(function (value, cb) { return cb(value); }, x); };
};

var reverse = function (list) { return [].concat( list ).reverse(); };

var _combine = pipe(
  reverse,
  apply$1(pipe)
);

var combine = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return _combine(args);
};

var defaultTo = function (defValue, source) { return source || defValue; };

var defaultTo$1 = curry(defaultTo)

var has = function (key, source) { return source && source[key] !== undefined
  ? true : false; };

var has$1 = curry(has)

var keyPath = function (source) { return Array.isArray(source) ? source : [source]; };

var get = function (key, source) { return keyPath(key).reduce(
  function (value, key) { return has$1(key, value) ? value[key] : undefined; },
  source
); };

var get$1 = curry(get)

var log = function (x) {
  console.log(x);
  return x
};

var obj;
var _set = function (key, value, source) { return Array.isArray(source)
  ? source.map(function (v, i) { return i === key ? value : v; })
  : (Object.assign({}, source, ( obj = {}, obj[key] = value, obj))); };

var set = function (key, value, source) {
  var keys = keyPath(key);
  var nextKey = keys[0];
  var rest = keys.slice(1);
  var nextValue = rest.length === 0
    ? value
    : set(rest, value, get$1(nextKey, source));
  return _set(nextKey, nextValue, source)
};

var set$1 = curry(set)

var update = function (key, callback, source) {
  var keys = keyPath(key);
  var nextKey = keys[0];
  var rest = keys.slice(1);
  var value = rest.length
    ? update(rest, callback, source[nextKey])
    : callback(source[nextKey]);
  return set$1(nextKey, value, source)
};

var update$1 = curry(update)

exports.apply = apply$1;
exports.combine = combine;
exports.curry = curry;
exports.defaultTo = defaultTo$1;
exports.get = get$1;
exports.has = has$1;
exports.keyPath = keyPath;
exports.log = log;
exports.pipe = pipe;
exports.reverse = reverse;
exports.set = set$1;
exports.update = update$1;

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

var log = function log(parser, x) {
  console.log(parser ? parser(x) : x);
  return x;
};

var log$1 = curry(log);

var passBy = function passBy(by, pass) {
  by(pass);
  return pass;
};

var passBy$1 = curry(passBy);

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

export { apply$1 as apply, combine, curry, defaultTo$1 as defaultTo, get$1 as get, has$1 as has, keyPath, log$1 as log, passBy$1 as passBy, pipe, reverse, set$1 as set, update$1 as update };

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"'
  }
  if (typeof obj === 'number') {
    return obj.toString()
  }
  if (obj === null) {
    return 'null'
  }
  if (typeof obj !== 'object' && obj === true) {
    return 'true'
  }
  if (typeof obj !== 'object' && obj === false) {
    return 'false'
  }
  var copy = obj
  var retval = ''
  if (Array.isArray(copy)) {
    if (copy.length === 0) {
      return '[]'
    }
    for (var i = 0; i < copy.length; i++) {
      if (i === copy.length-1) {
        return '[' + retval + stringifyJSON(copy[i]) + ']'
      }
      retval += stringifyJSON(copy[i]) + ','
    }
  }
  if (typeof obj === 'object') {
    var objectkeys = Object.keys(obj)
    if (objectkeys.length === 0) {
      return '{}'
    }
    for (key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        return '{}'
      }
      if (key === objectkeys[objectkeys.length-1]) { //if last key
        return '{' + retval + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '}'
      }
      retval += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) +','
    }
  }
};

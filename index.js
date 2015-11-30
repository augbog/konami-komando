var konami = function(opts) {
  if (typeof opts.once === "undefined") {
    opts.once = true;
  }

  if (typeof opts.useCapture === "undefined") {
    opts.useCapture = true;
  }

  if (typeof opts.callback !== "function") {
    throw new Error("Konami: callback is not a function.");
    return;
  }

  var ran = false;
  var keypresses = [];
  var KONAMI_CODE = [38, 40, 38, 40, 37, 39, 66, 65];

  document.addEventListener('keydown', function(e) {
    if (opts.once && ran) {
      return;
    }

    var key = (function(e) {
      var event = e || window.event;
      return (event.keyCode || event.which);
    })(e);

    // if first button isn't up, return
    if (keypresses.length == 0 && key != 38) {
      return;
    // if valid konami code character and keypresses available
    } else if (keypresses.length < 8 && /37|38|39|40|65|66/.test(key)) {
      keypresses.push(key);
      if (keypresses.length == 8
          && JSON.stringify(keypresses) == JSON.stringify(KONAMI_CODE)) {
        opts.callback();
        if (opts.once) {
          ran = true;
        }
      }
    } else {
      keypresses = [];
    }
  }, opts.useCapture);
};

module.exports = konami;

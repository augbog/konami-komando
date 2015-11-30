# Konami Komando

A simple JavaScript module that lets you pass a callback after a user has entered the Konami code.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Konami_Code.svg/800px-Konami_Code.svg.png" alt="Konami code" />

# Install

`npm install konami-komando --save-dev`

# Usage

```
require('konami-komando')({
  once: true,
  useCapture: true,
  callback: function() {
    // Do stuff here
  }
});
```

# Parameters

## once
Tells the code to only detect when a user has inputted the konami code once and then will no longer stop execution. If set to `false`, everytime the user inputs the konami code, the `callback` will be ran.

If not specified, it will default to `true`.

## useCapture
Sets the priority of the event listener on `keydown`. This is important if you have your own event listeners on `keydown`. For more information on `useCapture`, check out this [StackOverflow answer about it](http://stackoverflow.com/questions/7398290/unable-to-understand-usecapture-attribute-in-addeventlistener) and also the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

If not specified, it will default to `true`.

## callback
The action that should be ran after the konami code has been entered. If a function is not passed, it will throw an error.

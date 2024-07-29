(function () {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    return speakWord + " " + name;
  };

  window.helloSpeaker = helloSpeaker;
})();

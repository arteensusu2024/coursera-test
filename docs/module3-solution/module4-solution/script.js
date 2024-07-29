(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jack"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var message = "";
    
    if (firstLetter === 'j') {
      message = byeSpeaker.speak(names[i]);
    } else {
      message = helloSpeaker.speak(names[i]);
    }
    
    // Append message to the output div
    var outputDiv = document.querySelector('.output');
    outputDiv.innerHTML += message + "<br>";
  }
})();

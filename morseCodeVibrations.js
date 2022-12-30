let missYou_btn = document.querySelector(".missYou_btn")

missYou_btn.addEventListener("click", cycle)

function vibrateMorseCode() {
    // define the Morse code representation of the phrase
    const morseCode = '.. / -.- -. --- .-- / -.-- --- ..- .----. .-.. .-.. / -- .. ... ... / -- .';
  
    // convert the Morse code string into an array of durations
    const durations = morseCode.split(' ').map(function(symbol) {
      if (symbol === '.') {
        return 100; // short vibration
      } else if (symbol === '-') {
        return 300; // long vibration
      } else if (symbol === '/') {
        return 1000; // pause between words
      } else {
        return 0; // ignore unknown symbols
      }
    });
  
    // vibrate the device using the array of durations
    navigator.vibrate(durations);
}

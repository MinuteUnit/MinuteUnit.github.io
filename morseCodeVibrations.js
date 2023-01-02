let missYou_btn = document.querySelector(".missYou_btn")

missYou_btn.addEventListener("click", vibrateMorseCode)

var phrase = prompt("Enter Your Phrase (no punctuation):")

let morsePhrase = ""
const alphabet = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-',
                  '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', 
                  '.--', '-..-', '-.--', '--..']

let engPhrase = phrase.toUpperCase()
const morseCode = engPhrase.split(' ');
for(var x = 0; x < morseCode.length; x++) {
  for(var i = 0; i < morseCode[x].length; i++) {
    morsePhrase = morsePhrase + alphabet[morseCode[x].charCodeAt(i)-65] + " "
  }
  morsePhrase = morsePhrase + "/ "
}

function vibrateMorseCode() {
    // define the Morse code representation of the phrase
    const morseCode = morsePhrase
  
    // convert the Morse code string into an array of durations
    const durations = morseCode.split('').map(function(symbol) {
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
    navigator.vibrate(durations)
}

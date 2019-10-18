let sentences = [
  'ten ate neite ate nee enet ite ate inet ent eate',
  'Too ato too nOt enot one totA not anot tOO aNot',
  'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat',
  'nee ene ate ite tent tiet ent ine ene ete ene ate'
];

// let sentences = [
//   'ten ate eate',
//   'Too ato tOO aNot',
//   'oat itain nean',
//   'itant eate eat',
//   'nee ene ate'
// ];

// track number of words
let numberOfWords = 0;
for (let i = 0; i < sentences.length; i++) {
  let sentence = sentences[i];
  let wordArray = sentence.split(' ');
  numberOfWords += wordArray.length;
}

let start = Date.now();

let numOfMistakes = 0;

let cs = 0;
let currentSentence = sentences[cs];
let clPosition = 0;
let currentLetter = currentSentence[clPosition];

// hide upper keyboard when page loads

let upperKeys = $('#keyboard-upper-container');
let lowerKeys = $('#keyboard-lower-container');
$(upperKeys).hide();

// display current sentence and target letter at top of page

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

// only show upper keys when Shift is held down and
// only show lower keys when not holding Shift

$('body').keydown(function (e) {
  if (e.keyCode == 16) {
    $(upperKeys).show();
    $(lowerKeys).hide();
  };
});

$('body').keyup(function (e) {
  if (e.keyCode == 16) {
    $(upperKeys).hide();
    $(lowerKeys).show();
  };
});

// highlight a key when it is pressed

$('body').keypress(function (e) {
  $('#' + e.charCode).addClass('highlight');
});

$('body').keyup(function (e) {
  $('.highlight').removeClass('highlight');
})

//  The entire game takes place within the keypress event

$('body').keypress(function (e) {
  let x = e.which;
  if (x === currentLetter.charCodeAt(0)) {                                  //As each correct key is pressed,
    $('#yellow-block').css({ 'marginLeft': '+=17.5px' });                   //the target letter goes to the next
    $('#feedback').append('<span class=" glyphicon glyphicon-ok"></span>')  //letter and a check appears
    clPosition++;
    currentLetter = currentSentence[clPosition];
    $('#target-letter').text(currentLetter);
    if (clPosition === currentSentence.length) {  //Once the end of a sentence is reached,
      clPosition = 0                              //the next sentence pops up
      cs++;
      if (cs === sentences.length) {      //Once the last sentence is typed, everything clears
        console.log('end of game');       //out and your results appear at the top
        $('body').off("keypress");
        $('#sentence').hide();
        $('#feedback').empty();
        $('#yellow-block').hide();
        let endTime = Date.now();
        let minutes = (endTime - start) / 1000 / 60;
        let wpm = numberOfWords / minutes - 2 * numOfMistakes;
        $('#target-letter').text('End of Game | WPM: ' + wpm);

      } else {                                  //If it's the end of a sentence, but not the last one,
        currentSentence = sentences[cs];        // the next sentence appears and checks/x's clear out
        currentLetter = currentSentence[clPosition];
        $('#target-letter').text(currentLetter);
        $('#sentence').text(currentSentence);
        $('#feedback').empty();
        $('#yellow-block').css('marginLeft', '-17.5px');
        console.log(currentLetter);
        console.log(currentSentence);
      }
    }
  } else {
    $('#feedback').append('<span class=" glyphicon glyphicon-remove"></span>')  //An 'X' appears for each missed key
    numOfMistakes++
  }

});

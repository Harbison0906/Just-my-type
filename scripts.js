// let sentences = [
//   'ten ate neite ate nee enet ite ate inet ent eate', 
//   'Too ato too nOt enot one totA not anot tOO aNot', 
//   'oat itain oat tain nate eate tea anne inant nean', 
//   'itant eate anot eat nato inate eat anot tain eat', 
//   'nee ene ate ite tent tiet ent ine ene ete ene ate'
// ];

let sentences = [
  'ten ate eate',
  'Too ato tOO aNot',
  'oat itain nean',
  'itant eate eat',
  'nee ene ate'
];

let currentSentence = sentences[0];
let clPosition = 0;
let currentLetter = currentSentence[clPosition];

// hide upper keyboard when page loads

let upperKeys = $('#keyboard-upper-container');
let lowerKeys = $('#keyboard-lower-container');
$(upperKeys).hide();

// display current sentence and target letter at top of page

$('#sentence').text(sentences[0]);
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



$('body').keypress(function (e) {
  let x = e.which;
  if (x === currentLetter.charCodeAt(0)) {
    // console.log(currentLetter);
    $('#yellow-block').animate({'marginLeft': '6px'});
    clPosition++;
    
    currentLetter = currentSentence[clPosition];
    $('#target-letter').text(currentLetter);
  } 

});




// hide upper keyboard when page loads

let upperKeys = $('#keyboard-upper-container');
let lowerKeys = $('#keyboard-lower-container');
$(upperKeys).hide();

// only show upper keys when Shift is held down and
// only show lower keys when not holding Shift

$('body').keydown(function(e) {
  if (e.keyCode == 16) {
    $(upperKeys).show();
    $(lowerKeys).hide();
  };
});

$('body').keyup(function(e) {
  if (e.keyCode == 16) {
    $(upperKeys).hide();
    $(lowerKeys).show();
  };
});

// highlight a key when it is pressed

$('body').keypress(function(e) {
  $('#' + e.charCode).addClass('highlight');
});

$('body').keyup(function(e) {
  $('.highlight').removeClass('highlight');
})

  


